import BookForm from "./BookForm";

export default function ReserveTable(props){
    return(
        <>
            <h1>Reserve a table</h1>
            <BookForm avaibleTimes={props.avaibleTimes} setAvaibleTimes={props.setAvaibleTimes} />
        </>
    );
}