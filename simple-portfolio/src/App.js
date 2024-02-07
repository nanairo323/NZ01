import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Image from "./components/Image";
import "./App.css";

const App = () => {
  return(
  <div className='APP'>
    <Header/>
    <About/>
    <Projects/>
    <Image/>
  </div>
  );
}

export default App;
