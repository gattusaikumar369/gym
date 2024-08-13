import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
import Progress from './components/Progress';
import Tutorials from './components/Tutorial';
import './App.css';

const App=()=>(
  <>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/tutorials" element={<Tutorials/>}/>
      <Route exact path="/progress" element={<Progress/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>  
  </>
)
export default App;
