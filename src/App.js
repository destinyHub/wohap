import React, {Component , Suspense} from 'react';
import routes from "./data/routes";
import Navbar from "./Components/header/Header";
import Barang from "./Components/barang";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


class App extends Component {

    render() {
        return (
            <Router>
                <Suspense fallback={() => (
                    <div>
                        <p>loading...</p>
                    </div>
                )}>
                    <Navbar/>
                    <Switch>
                        {routes.map((route,idx) => (

                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    component={route.component}
                                />


                        ))}
                    </Switch>
                    <Barang>
                        
                    </Barang>
                </Suspense>
            </Router>
        );
    }
}

export default App;