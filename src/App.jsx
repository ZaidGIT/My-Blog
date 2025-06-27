
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Archives from "./pages/Archives/Archives"
import Tags from "./pages/Tags/Tags";
import Links from "./pages/Links/Links";
import About from "./pages/About/About";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/archives' element = {<Archives/>}/>
      <Route path='/tags' element = {<Tags/>}/>
      <Route path='/links' element = {<Links/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='*' element = {<Home/>}/>
      </Routes>
    </>
  );
}


export default App;
