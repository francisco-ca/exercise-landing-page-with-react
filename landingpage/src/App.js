import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (

<div className= "evth"> 
<Navbar></Navbar>
<div className= "container">
 <div className = "row">
         <div className = "col-sm-auto"><Jumbotron> </Jumbotron>
         </div> 
         </div> 
<div className = "row">
    <div className = "col-12 col-sm"><Card></Card></div>
    <div className = "col-12 col-sm"><Card></Card></div>
    <div className = "col-12 col-sm"><Card></Card></div>
    <div className = "col-12 col-sm"><Card></Card></div>
</div>
</div>

<Footer></Footer>
  </div>
    
  );
}

export default App;
