import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Auth from './components/auth/Auth'
import Footer from './components/footer/Footer';

function App() {

  const [token, setToken] = useState('');
  const [signup, setSignup] = useState(true);

  return (
    <div className="App min-vh-100 p-0 container-fluid d-flex flex-column align-items-center">
      <BrowserRouter>

        <Navbar/>

        <Routes>

          {
            !token
            ?
            <Route path="/auth" element={<Auth setToken={setToken} signup={signup} setSignup={setSignup} />} />
            :
            <Route path="/" element={<Auth />} />
          }

        </Routes>
        
        <Footer />

      </BrowserRouter>
      {token}
    </div>
  );
}

export default App;

// TODO This just displays the spinning react logo page. We can probably remove this and a bunch of other stuff, like the css and logo. -Scott
// function Home(){
//   return(
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   )
// }