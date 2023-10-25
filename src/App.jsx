import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routers,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

     
function Home(){
  return(
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
      </header>
  )
}