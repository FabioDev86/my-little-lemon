import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial(props){
    return(
        <div className="testimonial">
            <h2>{props.name}</h2>
            <img src={props.source} alt={props.alt}/>
            <div className='retings'>
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
            </div>
            <p>{props.review}</p>
        </div>
    );
}