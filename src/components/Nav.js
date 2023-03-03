import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <>
            <nav>
                <ul>
                    <li><img src="Logo.svg" alt="little lemon logo"/></li>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><Link to='/reserve-table'>Reservation</Link></li>
                    <li><a href="#orderonline">Order online</a></li>
                    <li><a href="#login">Log in</a></li>
                </ul>
            </nav>
        </>
    );
}