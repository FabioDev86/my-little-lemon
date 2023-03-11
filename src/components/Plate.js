export default function Plate(props){
    return(
        <article className = "plate">
            <img src={props.source} alt={props.alt}></img>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <h3>Order a delivery</h3>
            <button>Basket Icon</button>
        </article>
    );
}