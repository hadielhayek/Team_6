import React from "react";
import './Feedback.css';
import SmallButton from "../../components/SmallButton";
import NavbarAdmin from "../../components/NavbarAdmin";


function FeedbackDB() {


  const deleteRow = () => {

  }

  return (
    <div>
      <NavbarAdmin/>,
      <div className="feedback_table">
        <table>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
          <tr>
            <td>Good company</td>
            <td>Ibrahim</td>
            <td>He is very friendly</td>
            <td><div className="btn"> <button className="edit">Show</button> <button className="delete">Delete</button></div></td>
          </tr>
          <tr>
            <td>Hard worker</td>
            <td>Hadi</td>
            <td>I like his hardwork</td>
            <td><div className="btn"><button className="edit">Show</button> <button className="delete">Delete</button></div></td>
          </tr>
          <tr>
            <td>Team Leader</td>
            <td>Rima</td>
            <td>  far World of Grammar.
            </td>
            <td><div className="btn"> <button className="edit">Show</button> <button className="delete">Delete</button></div></td>
          </tr>
          <tr>
            <td>Awesome work</td>
            <td>Zakaria</td>
            <td>Creative</td>
            <td><div className="btn"><SmallButton text="Show" style={{ backgroundColor: "#27AE60" }} /> <button className="delete">Delete</button></div></td>
          </tr>
        </table>
      </div>
    </div>
  )

}
export default FeedbackDB;