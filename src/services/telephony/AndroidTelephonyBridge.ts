import { registerPlugin, Capacitor } from '@capacitor/core';

export interface SignifyTelephonyPluginInterface {
  isAvailable(): Promise<{ available: boolean; platform: string }>;
  answerCall(): Promise<void>;
  endCall(): Promise<void>;
  addListener(
    eventName: 'incomingCall',
    listenerFunc: (data: { phoneNumber: string; timestamp: number }) => void
  ): Promise<{ remove: () => void }>;
  addListener(
    eventName: 'callConnected',
    listenerFunc: (data: { status: string }) => void
  ): Promise<{ remove: () => void }>;
  addListener(
    eventName: 'callEnded',
    listenerFunc: (data: { status: string }) => void
  ): Promise<{ remove: () => void }>;
}

export const SignifyTelephony = registerPlugin<SignifyTelephonyPluginInterface>('SignifyTelephony');

export const isNativeAndroid = (): boolean => {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android';
};

