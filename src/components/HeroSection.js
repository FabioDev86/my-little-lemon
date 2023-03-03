import {Link} from 'react-router-dom';

export default function HeroSection(){
    return (
        <div className = 'hero-section'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nulla leo, placerat dignissim finibus eu,
                    tristique sed metus. Etiam quam nulla, ornare sit amet diam
                </p>
                <Link to='/reserve-table'><button>Reserve a table</button></Link>
            </div>
            <div>
                <img src='hero-section.jpg' alt='restaurant food'></img>
            </div>
        </div>
    );
}