import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import './ExperienceDB.css';
import Button from "../../components/Button";
import { Link , useLocation } from "react-router-dom";
import axios from "axios"
function ExperienceEdit({experiences}) {

       const [experience, SetExperience] = useState({
              title:"",
              dateStart:"",
              dateEnd:"",
              company:"",
              locationOne:"",
              locationTwo:"",
              description:""
       })
       const location = useLocation().state.flag

       console.log(location) 
       useEffect(()=>{
       SetExperience ({title:experiences.title,
              dateStart:experiences.dateStart,
              dateEnd:experiences.dateEnd,
              company:experiences.company,
              locationOne:experiences.locationOne,
              locationTwo:experiences.locationTwo,
              description:experiences.description}
              ) 
} , [experiences])


       const handleOnChange = (e) => {
              e.preventDefault();
              const value = e.target.value;
              SetExperience({...experience, [e.target.name]:value});
       }

       const handleSubmission = (e) => {
              e.preventDefault();
              if(location)
              axios.post("http://localhost:5000/Experience",{title:experience.title, dateStart:experience.dateStart, dateEnd:experience.dateEnd, company:experience.company, locationOne:experience.locationOne, locationTwo:experience.locationTwo, description:experience.description}).then(
              )
              else
              axios.put(`http://localhost:5000/Experience/${experiences._id}`,{title:experience.title, dateStart:experience.dateStart, dateEnd:experience.dateEnd, company:experience.company, locationOne:experience.locationOne, locationTwo:experience.locationTwo, description:experience.description}).then(

              )
              SetExperience({
                     title:"",
                     dateStart:"",
                     dateEnd:"",
                     company:"",
                     locationOne:"",
                     locationTwo:"",
                     description:""
              })
       }
   useEffect(()=>{
return(
SetExperience({})

)
   },[])
      
       return (
              <div>
                     <Navbar />
                   
                     <div className="form_edit_container">
                            < form onSubmit={handleSubmission} className="form_edit">

                                   <table>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Experience Title:</label>
                                                 </td>
                                                 <input type="text" name="title" value={experience.title} onChange={handleOnChange} required/>

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Date Start:</label>
                                                 </td>
                                                 <input type="text" name ="dateStart" value={experience.dateStart} onChange={handleOnChange} required />

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Date end:</label>
                                                 </td>
                                                 <td><input type="text" name="dateEnd" value={experience.dateEnd} onChange={handleOnChange} required/></td>

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Company:</label>
                                                 </td>
                                                 <td>   <input type="text" name ="company" value={experience.company} onChange={handleOnChange} required/></td>

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Location 1:</label>
                                                 </td>
                                                 <td>  <input type="text" name="locationOne" value={experience.locationOne} onChange={handleOnChange} required/></td>

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Location 2:</label>
                                                 </td>
                                                 <td>  <input type="text" name="locationTwo" value={experience.locationTwo} onChange={handleOnChange}required/></td>

                                          </tr>
                                          <tr>
                                                 <td className="td_label">
                                                        <label>Description:</label>
                                                 </td>
                                                 <td>  <input type="text" name="description" value={experience.description} onChange={handleOnChange}required/></td>

                                          </tr>
                                          <tr>
                                                 <td>
                                                 </td>
                                                 <td>
                                                        <div className="divbtn"> <Button text="Submit" /></div>
                                                 </td>

                                          </tr>
                                   
                                   </table>
                            </form>
                     </div>
              </div>
       )

}      
export default ExperienceEdit;