import { LogLevel, PublicClientApplication, type RedirectRequest } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "85291cf1-d8a8-40e3-93c7-ac5579cdebad",
        authority: "16e28732-641f-4a3c-b622-06a9f4f3290e",
        knownAuthorities: [],
        cloudDiscoveryMetadata: "",
        redirectUri: "http://localhost:5173/",
        postLogoutRedirectUri: "enter_postlogout_uri_here",
        navigateToLoginRequestUrl: true,
        clientCapabilities: ["CP1"],
        protocolMode: "AAD"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    },
    system: {
        loggerOptions: {
            loggerCallback: (
                level: LogLevel,
                message: string,
                containsPii: boolean
            ): void => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
            piiLoggingEnabled: false,
        },
        windowHashTimeout: 60000,
        iframeHashTimeout: 6000,
        loadFrameTimeout: 0,
        asyncPopups: false,
    },
    telemetry: {
        application: {
            appName: "My Application",
            appVersion: "1.0.0",
        },
    },
};


export const loginRequest: RedirectRequest = {
  scopes: [
    'openid', 
    'profile', 
    'email', 
    'User.Read',
    'offline_access',      // Enables refresh tokens
  ],
  // Request groups in the token
  extraQueryParameters: {
    claims: JSON.stringify({
      "id_token": {
        "groups": {
          "essential": true
        }
      },
      "access_token": {
        "groups": {
          "essential": true
        }
      }
    })
  },
  // No prompt specified - allows silent SSO for single account
  // Will automatically show account picker only if multiple accounts exist
};
