
import {Link} from 'react-router-dom';


export default function Nav () {

    return (
        <div class="nav">
            <Link to='/' style={{color:"white", padding: 10}}>Home</Link>
            <Link to='/foo' style={{color:"white", padding: 10}}>Foo</Link>
            <Link to='/bar' style={{color:"white", padding: 10}}>Bar</Link>
            <Link to='/api' style={{color:"white", padding: 10}}>API</Link>
        </div>
    );
}
