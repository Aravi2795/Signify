package org.signify.telephony;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
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

