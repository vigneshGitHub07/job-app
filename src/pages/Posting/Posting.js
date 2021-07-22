import '../Posting/Posting.css';
import logo from '../Home/image/logo.jpg'
import {IoEnter} from 'react-icons/io5';
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import firebase from "../firebse"
const Posting =()=> {
    
        const [companyname,setcompanyname] = useState("");
        const [designation,setdesignation] = useState("");
        const [experience,setexperience] = useState("");
       const [vacancies, setvacancies]  = useState("");
        const [location , setlocation] = useState("");
        const [skills, setskills] = useState("");
    
    const handleInputChange = (e)=>{
        if (companyname === ""){
            alert("please fill up fileds")
        } else{
            const firestore = firebase.database().ref('/CompanyInfo');
            let data = {
                companyname: companyname,
                designation: designation,
                experience: experience,
                vacancies: vacancies,
                location: location,
                skills: skills
            }
        firestore.push(data);
        setcompanyname("");
        setdesignation("");
        setexperience("");
        setvacancies("");
        setlocation("");
        setskills("");
        }

    };
    return(
<div className="posting container-fluid">
<div className="row header">     
          <p><img src={logo} alt="logo" className="logo" /><span className="title">Get Job</span></p>        
        </div>
        <div className="row details">
            <div className="col-md-6 background">
            <div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">Company Name  </span>
  <input type="text" class="form-control" value ={companyname} name="companyname" onChange={(e)=>{setcompanyname(e.target.value)}} placeholder="Enter Your Company Name" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">Designaition</span>
  <input type="text" class="form-control" value={designation} name="designation" onChange={(e)=>{setdesignation(e.target.value)}} placeholder="Enter Designation" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">Skills</span>
  <input type="text" class="form-control" value={skills} name="skills" onChange={(e)=>{setskills(e.target.value)}} placeholder="Enter Skills" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">Year of Experience</span>
  <input type="text" class="form-control" value={experience} name="experience" onChange={(e)=>{setexperience(e.target.value)}} placeholder="Enter Experience" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">No of Vacancies</span>
  <input type="text" class="form-control" value={vacancies} name="vacancies" onChange={(e)=>{setvacancies(e.target.value)}} placeholder="Enter Vacancies" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div class="input-group flex-nowrap my-3">
  <span class="input-group-text" id="addon-wrapping">Location</span>
  <input type="text" class="form-control" value={location} name="location" onChange={(e)=>{setlocation(e.target.value)}} placeholder="Enter Location" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div className="row buttons">
    <div className="col-md-3">
    <button className="submitbtn" onClick={()=>handleInputChange()}> <IoEnter /><span className="btn">Submit</span></button>
    </div>
    <div className="col-md-3">
   <Link to="/"> <button className="submitbtn"> <AiFillHome /><span className="btn">Home</span></button></Link>
    </div>
</div>

            </div>
        </div>
     </div>
     
    );
}
export default Posting