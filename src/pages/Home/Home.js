import React, {Component} from "react"
import logo from '../Home/image/logo.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineLogin} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import '../Home/Home.css'
function Home() {
    return (
      <div >
      <div className="first container-fluid">
        <div className="row header">     
          <p><img src={logo} alt="logo" className="logo" /><span className="title">Get Job</span></p>        
        </div>
        <div className="row content">
          <div className="col-md-3 mx-5 my-5 applyjob">
  <p> Job Posting</p>
  <h3>Description:</h3>
  <h5> <AiOutlineArrowRight /> Post your Job Detail & Designaition by Clicking Below Post Button </h5>
        <Link to="/Posting"> <button className="jobbutton"> <AiOutlineLogin /> Post</button></Link>
          </div>
          <div className="col-md-3 mx-5 my-5 applyjob">
          <p> Job Application</p>
          <h3>Description:</h3>
  <h5> <AiOutlineArrowRight /> Search your Designaition & Choose Job by Clicking Below Search Button </h5>
        <Link to ="/Application"> <button className="jobbutton"> <AiOutlineLogin /> Search</button> </Link>
          </div>
  
        </div>
      </div>
         </div>
    );
  }
  
  export default Home;
  