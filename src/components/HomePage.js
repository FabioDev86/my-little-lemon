import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials'
import About from './About'

export default function HomePage(props){
    return(
        <>
            <HeroSection />
            <Highlights />
            <Testimonials />
            <About />
        </>
    );
}
