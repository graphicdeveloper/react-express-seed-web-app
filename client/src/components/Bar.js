
import logo from '../logo.svg';
import React from 'react';
import Nav from './Nav';


export default function Bar ({ data }) {

    return (
        <div className="Home">
            <header className="App-header">
                <p>~~~ BAR ~~~</p>
                <Nav />
                <img src={logo} className="App-logo" alt="logo"/>
                <p><b>Express</b>: {!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}
