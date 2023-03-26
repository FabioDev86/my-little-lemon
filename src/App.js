import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ReserveTable from './components/ReserveTable';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useReducer, createContext, useState } from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {

//UPDATE TIMES
  function updateTimes(state, action){
    return state.filter( t => t !== action.type);
  }
  function initializeTimes(){
    const initialState = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]
    return (initialState);
  }
  const [avaibleTimes, setAvaibleTimes] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage avaibleTimes={avaibleTimes} />} />
        <Route path='/reserve-table' element={<ReserveTable avaibleTimes={avaibleTimes} setAvaibleTimes={setAvaibleTimes}/>} />
        <Route path='/confirm' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
