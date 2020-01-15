import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Navbar from "../src/components/Navbar/index";
import Jumbotron from "../src/components/Jumbotron/index";


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Jumbotron />
                <Switch>
                    <Route exact path = "/" component={Search} />
                    <Route exact path = "/saved" component={Save} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;