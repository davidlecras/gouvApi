import React from "react";
import './App.css';
import ApplicationWebsite from "./containers/ApplicationWebsite/ApplicationWebsite";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <ApplicationWebsite/>
    </Router>
  );
}

export default App;
