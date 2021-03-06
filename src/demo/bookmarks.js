import React from "react";
import { render } from "react-dom";
import { ProvideOptions } from "./useOptions.js";
import { ProvideBookmarks } from "./useBookmarks.js";
import App from "./App.js";
import "focus-visible";

render(
  <React.StrictMode>
    <ProvideOptions>
      <ProvideBookmarks>
        <App />
      </ProvideBookmarks>
    </ProvideOptions>
  </React.StrictMode>,
  document.querySelector("#app")
);
