import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import {
  EventType,
  PublicClientApplication,
} from "@azure/msal-browser";
import { msalConfig } from "./config/msal.config.ts";

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  // 1. Get all accounts
  const accounts = msalInstance.getAllAccounts();

  // 2. If there are existing account(s), set the active account to the first one
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  // 3. If it is a new login, set the eventCallback
  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const { account } = event.payload
      msalInstance.setActiveAccount(account);
    }
  });

  // 4. set MSAL instance into axios
  
  // 5. Set env logConfig
  
  // 6. Pass msalInstance to msalProvider
  createRoot(document.getElementById("root")).render(
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>,
  );
});
