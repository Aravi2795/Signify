package org.signify.telephony;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(SignifyTelephonyPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
