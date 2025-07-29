import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import SessionDetail from "./pages/SessionDetail.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/session-detail" element={<SessionDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);