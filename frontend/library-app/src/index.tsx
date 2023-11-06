import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  'pk_test_51O9HrOLMKmlEx9LUr4qtGFbVmRAEFzGe2v4MBSVmfqZ2BjZkB7NYRcZ6aekiHiAQcdjMmByeJWXHiu0zIIkRbi5d00op3t1g67'
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
