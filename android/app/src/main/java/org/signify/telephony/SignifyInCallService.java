package org.signify.telephony;

import android.content.Intent;
import android.net.Uri;
import android.telecom.Call;
import android.telecom.InCallService;
import android.telecom.VideoProfile;
import android.util.Log;

public class SignifyInCallService extends InCallService {
    private static final String TAG = "SignifyInCallService";
    private static SignifyInCallService instance;
    private Call currentCall;

    public static SignifyInCallService getInstance() {
        return instance;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
        Log.d(TAG, "SignifyInCallService initialized");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        instance = null;
    }

    private void bringAppToFront() {
        try {
            Intent intent = new Intent(this, MainActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
            startActivity(intent);
        } catch (Exception e) {
            Log.e(TAG, "Failed to bring MainActivity to front", e);
        }
    }

    @Override
    public void onCallAdded(Call call) {
        super.onCallAdded(call);
        this.currentCall = call;
        Log.d(TAG, "onCallAdded: " + call);

        if (call.getState() == Call.STATE_RINGING) {
            bringAppToFront();
        }

        // Extract phone number from SIM call
        String phoneNumber = "Unknown";
        if (call.getDetails() != null && call.getDetails().getHandle() != null) {
            Uri handle = call.getDetails().getHandle();
            phoneNumber = handle.getSchemeSpecificPart();
        }

        final String finalPhone = phoneNumber;
        call.registerCallback(new Call.Callback() {
            @Override
            public void onStateChanged(Call call, int state) {
                super.onStateChanged(call, state);
                Log.d(TAG, "Call onStateChanged: " + state);

                if (state == Call.STATE_RINGING) {
                    bringAppToFront();
                }

                if (SignifyTelephonyPlugin.getInstance() != null) {
                    if (state == Call.STATE_RINGING) {
                        SignifyTelephonyPlugin.getInstance().notifyIncomingCall(finalPhone);
                    } else if (state == Call.STATE_ACTIVE) {
                        SignifyTelephonyPlugin.getInstance().notifyCallConnected();
                    } else if (state == Call.STATE_DISCONNECTED) {
                        SignifyTelephonyPlugin.getInstance().notifyCallEnded();
                    }
                }
            }
        });

        // If already ringing when added
        if (call.getState() == Call.STATE_RINGING && SignifyTelephonyPlugin.getInstance() != null) {
            SignifyTelephonyPlugin.getInstance().notifyIncomingCall(phoneNumber);
        }
    }

    @Override
    public void onCallRemoved(Call call) {
        super.onCallRemoved(call);
        Log.d(TAG, "onCallRemoved: " + call);
        if (this.currentCall == call) {
            this.currentCall = null;
            if (SignifyTelephonyPlugin.getInstance() != null) {
                SignifyTelephonyPlugin.getInstance().notifyCallEnded();
            }
        }
    }

    public void answerCall() {
        if (currentCall != null && currentCall.getState() == Call.STATE_RINGING) {
            Log.d(TAG, "Answering incoming SIM call...");
            currentCall.answer(VideoProfile.STATE_AUDIO_ONLY);
        }
    }

    public void endCall() {
        if (currentCall != null) {
            Log.d(TAG, "Ending SIM call...");
            currentCall.disconnect();
        }
    }

    public Call getCurrentCall() {
        return currentCall;
    }
}
