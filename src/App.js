import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/add' element={<Add/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
