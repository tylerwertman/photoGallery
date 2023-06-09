import './App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Grid from './components/Grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

function App() {

  const [photos, setPhotos] = useState([])
  const [count, setCount] = useState(0)
  useEffect(()=>{
    axios.get('http://localhost:8000/api/get')
    .then((res)=>{
      setPhotos(res.data)
    })
    .catch((err)=>console.log("err", err))
  },[count])
  return (
    <div className="App">
      <Navbar/>
      <Grid photos={photos}/>
      <Button count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
