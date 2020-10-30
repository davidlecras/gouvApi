import React, { Component } from "react";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Localization from "./Localization/Localization";
import Navbar from "../../components/UI/Navbar/Navbar";
import {Route} from "react-router-dom"

class ApplicationWebsite extends Component {
  render() {
    return (
      <div className="container">
      <Navbar/>
      <Route path="/" exact render={()=><Home/>}/>
      <Route path="/localize" render={()=><Localization/>}/>
      <Route path="/contact" render={()=><Contact/>}/>
      </div>
    );
  }
}
export default ApplicationWebsite;
