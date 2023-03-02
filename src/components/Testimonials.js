import Testimonial from "./Testimonial"

export default function Testimonials(){
    return (
        <>
            <h1>Testimonials</h1>
            <Testimonial source='Testimonial1.png' alt='a testimonial' name='Name' review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
            <Testimonial source='Testimonial2.png' alt='a testimonial' name='Name' review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
            <Testimonial source='Testimonial3.png' alt='a testimonial' name='Name' review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla leo, placerat dignissim finibus eu, tristique sed metus. Etiam quam nulla, ornare sit amet diam ' />
        </>
    );
}