
import React from "react";

import logo from './logo.svg';
import './App.css';

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

    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                <p><b>Express</b>: {!data ? "Loading..." : data}</p>
            </p>
        </header>
    </div>
}

export default App;
