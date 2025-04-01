// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"; // Ensure main styles are imported

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);