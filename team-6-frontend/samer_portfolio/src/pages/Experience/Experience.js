import React, { useState, useEffect } from "react";
import './ExperienceDB.css';
import Button from "../../components/Button";
import SmallButton from "../../components/SmallButton";
import NavbarAdmin from "../../components/NavbarAdmin";
import { Link } from "react-router-dom";
import axios from "axios"


function ExperienceDB({ editExperience }) {

  const [data, setData] = useState([]);
  const [idExperience, setIdExperience] = useState(0);
  let flag;


  const deleteExperience = (id) => {
    axios.delete(`http://localhost:5000/Experience/${id}`, { crossdomain: true }).then(response => {
      setTimeout("location.reload(true)", 0);
      console.log("0 deleted")

    })
  }


  useEffect(() => {
    axios.get("http://localhost:5000/Experience", { crossdomain: true }).then(response => {
      setData(response.data.response);
    });

  }, [])


  const handleEditExperience = async (id) => {
    await axios.get(`http://localhost:5000/Experience/${id}`, { crossdomain: true }).then(response => {
      editExperience(response.data.response)

    })

  }
  return (
    <>
      <NavbarAdmin />
      <div className="experience_table">
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Description</th>
              <th></th>
            </tr>
            {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>{data.company}</td>
                  <td>{data.description}</td>
                  <td><div className="btn"><Link to="edit" state={{ flag: false }}><SmallButton text="Edit" onClick={() => handleEditExperience(data._id)} id={index} /></Link><SmallButton text="Delete" onClick={() => deleteExperience(data._id)} /></div></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div style={{ textAlign: "end", marginTop: "20px" }}> <Link to="/admin/experience/edit" state={{ flag: true }}> <Button text="Add" /></Link></div>
      </div>

    </>
  )

}

export default ExperienceDB;