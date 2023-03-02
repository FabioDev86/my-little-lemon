import './App.css';
import Nav from './components/Nav';

import Footer from './components/Footer';
import ReserveTable from './components/ReserveTable';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reserve-table' element={<ReserveTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
