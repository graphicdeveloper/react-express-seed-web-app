
import logo from '../logo.svg';
import '../App.css'
import Nav from './Nav';

export default function Home ({ data }) {

    return (
        <div className="Home">
            <header className="App-header">
                <p>~~~ HOME ~~~</p>
                <Nav />
                <img src={logo} className="App-logo" alt="logo"/>
                <p><b>Express</b>: {!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}
