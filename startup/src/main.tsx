import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="byu-stat.us.auth0.com"
        clientId="Qs6uG4p98IanGhlGNE3UQYCGLdp1nwZ9"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      {/* <Provider>
        <App />
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
