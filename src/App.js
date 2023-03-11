import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ReserveTable from './components/ReserveTable';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useReducer } from 'react';


function App() {

  const [avaibleTimes, setAvaibleTimes] = useReducer(updateTimes, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

  function updateTimes(state, action){
    return (avaibleTimes.filter( item => item !== action.type ));
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage avaibleTimes={avaibleTimes} />} />
        <Route path='/reserve-table' element={<ReserveTable avaibleTimes={avaibleTimes} setAvaibleTimes={setAvaibleTimes}/>} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
