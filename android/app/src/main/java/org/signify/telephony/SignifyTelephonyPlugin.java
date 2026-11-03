package org.signify.telephony;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.app.role.RoleManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.telecom.TelecomManager;
import android.util.Log;

@CapacitorPlugin(name = "SignifyTelephony")
public class SignifyTelephonyPlugin extends Plugin {
    private static final String TAG = "SignifyTelephonyPlugin";
    private static SignifyTelephonyPlugin instance;

    public static SignifyTelephonyPlugin getInstance() {
        return instance;
    }

    @Override
    public void load() {
        super.load();
        instance = this;
        Log.d(TAG, "SignifyTelephonyPlugin loaded");
    }

    @PluginMethod
    public void isAvailable(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("available", true);
        ret.put("platform", "android-native-telephony");
        call.resolve(ret);
    }

    @PluginMethod
    public void checkDefaultDialer(PluginCall call) {
        JSObject ret = new JSObject();
        boolean isDefault = false;
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                RoleManager roleManager = (RoleManager) getContext().getSystemService(Context.ROLE_SERVICE);
                if (roleManager != null) {
                    isDefault = roleManager.isRoleHeld(RoleManager.ROLE_DIALER);
                }
            } else {
                TelecomManager telecomManager = (TelecomManager) getContext().getSystemService(Context.TELECOM_SERVICE);
                if (telecomManager != null) {
                    String defaultDialer = telecomManager.getDefaultDialerPackage();
                    isDefault = getContext().getPackageName().equals(defaultDialer);
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "Error checking default dialer", e);
        }
        ret.put("isDefault", isDefault);
        call.resolve(ret);
    }

    @PluginMethod
    public void requestDefaultDialer(PluginCall call) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                RoleManager roleManager = (RoleManager) getContext().getSystemService(Context.ROLE_SERVICE);
                if (roleManager != null && roleManager.isRoleAvailable(RoleManager.ROLE_DIALER)) {
                    if (!roleManager.isRoleHeld(RoleManager.ROLE_DIALER)) {
                        Intent intent = roleManager.createRequestRoleIntent(RoleManager.ROLE_DIALER);
                        getActivity().startActivity(intent);
                        call.resolve();
                        return;
                    } else {
                        call.resolve();
                        return;
                    }
                }
            }

            // Fallback for Android 9 and below
            Intent intent = new Intent(TelecomManager.ACTION_CHANGE_DEFAULT_DIALER);
            intent.putExtra(TelecomManager.EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME, getContext().getPackageName());
            getActivity().startActivity(intent);
            call.resolve();
        } catch (Exception e) {
            Log.e(TAG, "Error requesting default dialer directly, trying settings", e);
            try {
                Intent intent = new Intent(android.provider.Settings.ACTION_MANAGE_DEFAULT_APPS_SETTINGS);
                getActivity().startActivity(intent);
                call.resolve();
            } catch (Exception ex) {
                try {
                    Intent intent = new Intent(android.provider.Settings.ACTION_SETTINGS);
                    getActivity().startActivity(intent);
                    call.resolve();
                } catch (Exception exc) {
                    call.reject("Could not request default dialer: " + exc.getMessage());
                }
            }
        }
    }

    @PluginMethod
    public void answerCall(PluginCall call) {
        SignifyInCallService service = SignifyInCallService.getInstance();
        if (service != null) {
            service.answerCall();
            call.resolve();
        } else {
            call.reject("InCallService not active");
        }
    }

    @PluginMethod
    public void endCall(PluginCall call) {
        SignifyInCallService service = SignifyInCallService.getInstance();
        if (service != null) {
            service.endCall();
            call.resolve();
        } else {
            call.reject("InCallService not active");
        }
    }

    public void notifyIncomingCall(String phoneNumber) {
        JSObject data = new JSObject();
        data.put("phoneNumber", phoneNumber);
        data.put("timestamp", System.currentTimeMillis());
        notifyListeners("incomingCall", data);
    }

    public void notifyCallConnected() {
        JSObject data = new JSObject();
        data.put("status", "connected");
        notifyListeners("callConnected", data);
    }

    public void notifyCallEnded() {
        JSObject data = new JSObject();
        data.put("status", "ended");
        notifyListeners("callEnded", data);
    }
}
