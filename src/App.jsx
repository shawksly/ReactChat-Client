import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Auth from './components/auth/Auth'
import Footer from './components/footer/Footer';

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

            <Route path="/" element={<Home token={token} />} />

            <Route path="/auth" element={<Auth setToken={updateToken} signup={signup} setSignup={setSignup} />} />

        </Routes>
        
        <Footer />

      </BrowserRouter>
      {token}
    </div>
  );
}

export default App;

function Home({ token, clearToken}){
  
  const navigate = useNavigate();
  
  if(!token)
  navigate("/auth");

return(
  <><h2>Home</h2></>
  )
}
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