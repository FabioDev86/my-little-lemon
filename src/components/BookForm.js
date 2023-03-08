import { useState } from 'react';

export default function BookForm(){

    const [date, setDate] = useState("no date");
    const [time, setTime] = useState("no time");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("no occasion");
    const [avaibleTimes, setAvaibleTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]);

    return(
        <div className="BookingForm">
            <form>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value);}} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={(e) => {setTime(e.target.value)}}>
                    {avaibleTimes.map(x => (<option>{x}</option>))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => {setGuests(e.target.value)}} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
            <h1>{date}</h1>
            <h1>{time}</h1>
            <h1>{guests}</h1>
            <h1>{occasion}</h1>
        </div>
    );
}