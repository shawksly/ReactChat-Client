import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Auth from './components/auth/Auth'
import Footer from './components/footer/Footer';
import Display from './components/display/Display';

function App() {

  const [token, setToken] = useState('');
  const [signup, setSignup] = useState(true);
  
  useEffect(initializeToken, []);
  
  function initializeToken() {
    setToken(localStorage.token);
    console.log("localStorage.token: ", localStorage.token);
  }
  
  function updateToken(newToken) {
    setToken(newToken);
    localStorage.token = newToken;
  }
  
  function clearToken() {
    setToken('');
    localStorage.removeItem('token');
    
  }
  
  return (
    <div className="App min-vh-100 p-0 container-fluid d-flex flex-column align-items-center">
      <BrowserRouter>

        <Navbar/>

        <Routes>

            <Route path="/" element={<Auth setToken={updateToken} signup={signup} setSignup={setSignup} />} />
            <Route path='/display' element={<Display token={token} clearToken={clearToken}/>}/>
        </Routes>
        
        <Footer />

      </BrowserRouter>
      {token}
    </div>
  );
}

export default App;

{/* //TODO This just displays the spinning react logo page. We can probably remove this and a bunch of other stuff, like the css and logo. -Scott
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */}