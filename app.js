import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./src/pages/home";
import Portfolio from "./src/pages/portfolio";
import Contact from "./src/pages/contact";
import Navbar from "./src/components/navbar"
import Wrapper from "./src/components/Wrapper";

function App() {
    return (
        <Router>
            <div>
            <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
            </div>
        </Router>
    )
}