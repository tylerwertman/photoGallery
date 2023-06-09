import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
import jwtdecode from 'jwt-decode'
import Navbar from './components/Navbar';
import RegLog from './components/RegLog';
import Main from './components/views/Main';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [welcome, setWelcome] = useState()
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()
  const [darkMode, setDarkMode] = useState(false)

  const cookieValue = Cookies.get('userToken');

  useEffect(() => {
    setCount(count + 1)
    if (Cookies.get('darkMode') === undefined) Cookies.set('darkMode', false.toString(), { expires: 7 })
    if (cookieValue) {
      setWelcome(jwtdecode(cookieValue).name + " (@" + jwtdecode(cookieValue).displayName + ")")
      setUser(jwtdecode(cookieValue))
      setLoggedIn(true)
    } else {
      setWelcome("Guest")
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar cookieValue={cookieValue} user={user} setUser={setUser} welcome={welcome} setWelcome={setWelcome} loggedIn={loggedIn} setLoggedIn={setLoggedIn} count={count} setCount={setCount} darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        <Route path="/" element={<RegLog setLoggedIn={setLoggedIn} count={count} setCount={setCount} />} />
        <Route path="/Landing" element={<Main setLoggedIn={setLoggedIn} count={count} setCount={setCount} cookieValue={cookieValue}/>} />

      </Routes>
      
    </div>
  );
}

export default App;
