export default function Testimonial(props){
    return(
        <>
            <h2>{props.name}</h2>
            <img src={props.source} alt={props.alt}/>
            <p>{props.review}</p>
        </>
    );
}