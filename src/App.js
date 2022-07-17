import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useNavigate} from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Countries from './Pages/Countries/Countries';
import {useState} from 'react'

function App() {

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState();



  return (
    <div>
    <BrowserRouter>
      <Navbar isFocused={isFocused} setIsFocused={setIsFocused} value={value} setValue={setValue}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:countriess" element={<Countries/>} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
