import React from "react";
import './App.scss'
import {NavBar} from './components'
import { About, Header, Skills, Contact, Project, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <Header />
      <About />
      <Project />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
