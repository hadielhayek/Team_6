import React from 'react'
import './About.css';
import samer from '../../images/samer'
import Button from '../../components/Button';
import NavbarAdmin from "../../components/NavbarAdmin";
export default function  AboutEdit (){
       
    return (
   
      <div>
      <NavbarAdmin />
      
      <div className="form_edit_container">
      <div className='samerImg'>  
             <img src={samer} className='editImg' alt="samer portfolio"></img>
             <span className='dot'></span>
        <span className='plus'></span>


           </div>
             < form className="form_edit">
      
                    <table>
                           <tr>
                                  <td className="td_label">
                                         <label>About me :</label>
                                  </td>
                                  <input type="text" className='aboueInput' />
      
                           </tr>
                           <tr>
                                  <td className="td_label">
                                         <label>First name:</label>
                                  </td>
                                  <input type="text"/>
      
                           </tr>
                           <tr>
                                  <td className="td_label">
                                         <label>Last name:</label>
                                  </td>
                                  <td><input type="text" /></td>
      
                           </tr>
                           <tr>
                                  <td className="td_label">
                                         <label>profile:</label>
                                  </td>
                                  <td>   <input type="text" /></td>
      
                           </tr>
                           <tr>
                                  <td className="td_label">
                                         <label>email:</label>
                                  </td>
                                  <td>  <input type="email"  /></td>
      
                           </tr>
                           <tr>
                                  <td className="td_label">
                                         <label>phone:</label>
                                  </td>
                                  <td>  <input type="text"  /></td>
      
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
      