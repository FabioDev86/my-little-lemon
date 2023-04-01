import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function BookForm(props){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("no date");
    const [time, setTime] = useState("no time");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("no occasion");
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        setFormData(new FormData(form));
        props.setAvaibleTimes({ type: time });
        navigate("/confirm");
    }
    return(
        <div className="BookingForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" onChange={(e) => {setFirstName(e.target.value)}} required/>
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" onChange={(e) => {setLastName(e.target.value)}} required/>
                <label htmlFor="email">Your best email</label>
                <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required/>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value)}} required />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={(e) => {setTime(e.target.value)}} required>
                    {props.avaibleTimes.map(x => (<option>{x}</option>))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => {setGuests(e.target.value)}} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}}>
                    <option>-none-</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}