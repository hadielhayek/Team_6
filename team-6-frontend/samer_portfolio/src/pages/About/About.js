import React, { Component } from 'react'
import './About.css';
import samer from '../../images/samer'
import '../../components/navbar'
import NavbarAdmin from "../../components/NavbarAdmin";
import { tab } from '@testing-library/user-event/dist/tab';
import Button from '../../components/Button'
export default function  AboutDB (){
  
    return (
<div>
<NavbarAdmin />

<div className="form_edit_container">
<div className='samerImg'>  
       <img src={samer} alt="samer portfolio"></img>
     </div>
       < form className="form_edit">

              <table>
                     <tr>
                            <td className="td_label">
                                   <label>About me :</label>
                            </td>
                            <input type="text" readOnly className='aboueInput'/>

                     </tr>
                     <tr>
                            <td className="td_label">
                                   <label>First name:</label>
                            </td>
                            <input type="text" readOnly/>

                     </tr>
                     <tr>
                            <td className="td_label">
                                   <label>Last name:</label>
                            </td>
                            <td><input type="text" readOnly/></td>

                     </tr>
                     <tr>
                            <td className="td_label">
                                   <label>profile:</label>
                            </td>
                            <td>   <input type="text" readOnly/></td>

                     </tr>
                     <tr>
                            <td className="td_label">
                                   <label>email:</label>
                            </td>
                            <td>  <input type="email" readOnly /></td>

                     </tr>
                     <tr>
                            <td className="td_label">
                                   <label>phone:</label>
                            </td>
                            <td>  <input type="text" readOnly /></td>

                     </tr>
                     
                     <tr>
                            <td>
                            </td>
                            <td>
                                   <div className="divbtn"> <Button text="Edit" /></div>
                            </td>

                     </tr>
              
              </table>
       </form>
</div>
</div>
)

  }

