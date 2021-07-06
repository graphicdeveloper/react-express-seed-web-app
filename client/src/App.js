
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Foo from './components/Foo';
import Bar from './components/Bar';

function App() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                console.log("API > data: " + JSON.stringify(data));
                setData(data.message)
            });
    }, []);

    // Here are a few routes to get things started (with a catch-all redirect to the home page at the bottom)
    // NOTE: The server's express.static, and basic routes, are set up for SPA behavior (i.e. paths are handled by React Router)
    //       The ./client/package.json also has "build": "INLINE_RUNTIME_CHUNK=false..." (it's required for all paths/redirects to work)
    //       The only path that _won't_ redirect back to index.html by the Express server (server.js) is {yourhost}/api - because obviously.
    return (
        <div className="App">
            <Switch>
                <Route exact path="/foo">
                    <Foo data={ data } />
                </Route>
                <Route exact path="/bar">
                    <Bar data={ data } />
                </Route>
                <Route exact path="/">
                    <Home data={ data } />
                </Route>
                <Route path='/api' component={() => {
                    // NOTE: This is just here to make it obvious that the /api path exists.
                    //       Clicking it shows you some JSON, and the Back button won't work.
                    //       ...You should really remove this Route (and nav link). Immediately. ;-)
                    window.location.href = '/api'; return null;
                }}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
