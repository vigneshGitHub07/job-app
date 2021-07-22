import '../Application/Application.css'
import logo from '../Home/image/logo.jpg'
import {Link} from 'react-router-dom';
import firebase from '../firebse';
import {useEffect, useState} from 'react';
function Application() {
    const [userData, setUserData] = useState([]);
useEffect(()=>{
    const firestore = firebase.database().ref('/CompanyInfo');
    firestore.on('value',(response)=>{
        const data = response.val();
        let CompanyInfo = [];
        for (let id in data){
            CompanyInfo.push({
                id:id,
                companyname:data[id].companyname,
                designation:data[id].designation,
                experience:data[id].experience,
                location:data[id].location,
                skills:data[id].skills,
                vacancies:data[id].vacancies
            });
        }
    setUserData(CompanyInfo);
    })
},[])
    return (
<div className="container-fluid application">
<div className="row header">     
          <p> <img src={logo} alt="logo" className="logo" /> <span className="title">Get Job</span> </p>        
        </div>
{
    userData.map((data,index)=>{
        return <div className="row applicationbackground">
             <div className="col-md-10 ">
             <div className="row applicationDetails">
             <div className="col-md-4">
                        <p>Company Name: <span className="answer">{data.companyname}</span></p>
                    </div>
                    <div className="col-md-4">
                        <p>Designation: <span className="answer">{data.designation}</span></p>
                    </div>
                    <div className="col-md-4">
                        <p>Experience: <span className="answer"> {data.experience}</span></p>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <p>Skils: <span className="answer"> {data.skills}</span></p>
                    </div>
                    <div className="col-md-4">
                        <p> Location: <span className="answer">{data.location}</span></p>
                    </div>
                    <div className="col-md-4">
                        <p>Vacancies: <span className="answer">{data.vacancies}</span></p>
                    </div>
<div>
<button className="applybtn"> Apply</button>
<Link to ="/"> <button className="applybtn mx-3"> Home</button> </Link>
</div>
</div>
             </div>
             </div>
        </div>
    })
}

</div>
    );


}

export default Application