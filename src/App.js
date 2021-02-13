import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
function App() {
  return (
    <HashRouter>
      <Route path="/about" components={About} />
      <div>124</div>
    </HashRouter>
  );
}

export default App;
