import React, { Component } from "react";
import Contact from "./Contact/Contact";
import {Container} from "react-bootstrap";
import Home from "./Home/Home";
import Localization from "./Localization/Localization";
import Navbar from "../../components/UI/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Error404 from "../../components/Errors/Error404";
import Error from "../../components/Errors/Error";
import Footer from "../../components/UI/Footer/Footer";

class ApplicationWebsite extends Component {
  render() {
    return (
      <>
      <div className="appWebsite">
        <Navbar />
      <Container fluid >
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/localize" render={() => <Localization />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route
            render={() => (
              <Error>
                <Error404 />
              </Error>
            )}
          />
        </Switch>
        </Container>
        <div className="minApp"></div>
        </div>
        <Footer/>
      </>
    );
  }
}
export default ApplicationWebsite;
