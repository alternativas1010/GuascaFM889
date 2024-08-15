import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.codigosimple.guasca1071',
  appName: 'Guasca FM 107.1+',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: false,
    },
    GoogleAuth: {
      scopes: ["profile","email"],
      serverClientId: '883889275255-rq5tdp3qv4bd98vva8gumfqngrcasmbg.apps.googleusercontent.com',
      "forceCodeForRefreshToken": false,
    },
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: false,
    },
  },
};

export default config;
