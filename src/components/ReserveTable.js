import BookForm from "./BookForm";
import BookFormik from "./BookFormik";

export default function ReserveTable(props){
    return(
        <div className="reserve-table">
            <h1>Reserve a table</h1>
            <BookFormik avaibleTimes={props.avaibleTimes} setAvaibleTimes={props.setAvaibleTimes} />
        </div>
    );
}