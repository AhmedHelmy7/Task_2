import './App.css';
import Navbar from './navbar';
import Home from './home';
import { Component, useState,useEffect } from 'react';
import axios from 'axios'

function App() {
    

  useEffect(() => {


  },[]);
  
  return (
    <div className="">
      <div className="content">
          <h1>Employee Profile </h1>

          <br/>
          
            

          <div className="row">
            <p className="left-txt"> <b>Name: </b> </p>
            <p className="left-txt"> <b>Phone Number: </b></p>
            <p className="left-txt"> <b>Job: </b></p>
          </div>
            

          
      </div>
    </div>

  );
}

export default App;
/*name : req.body.name,
            Email: req.body.email,
            Age : req.body.age,
            BornIn:req.body.bornin,
            LivesIn: req.body.job,
            MartialStatus:req.body.martialstatus,
            PhoneNumber: req.body.phonenumber,
            Job:req.body.job
            */