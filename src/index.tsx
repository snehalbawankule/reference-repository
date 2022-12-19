import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

//import { Provider } from 'react-redux';
//import {store} from './store/store';
//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="838410034439-tquesqjhpdt4dg2816imfkt62m5u18bu.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      ;
    </BrowserRouter>
  </React.StrictMode>
);
