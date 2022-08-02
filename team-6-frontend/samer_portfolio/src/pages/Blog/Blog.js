import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import './Blog.css';
import SmallButton from "../../components/SmallButton";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
//  import  {#blogs} from 'react-router-dom';
export default function Blog({ editBlog }) {

  const [data, setData] = useState([]);
  const [idblog, setIdblog] = useState(0);
  let flag;


  const deleteblogs = (id) => {
    axios.delete(`http://localhost:5000/blog/${id}`, { crossdomain: true }).then(response => {
      setTimeout("location.reload(true)", 0);
      console.log("0 deleted")

    })
  }

  useEffect(() => {
    axios.get("http://localhost:5000/blog", { crossdomain: true }).then(response => {
      setData(response.data.response);
    });
  }, [])

  const handleEditblog = async (id) => {
    await axios.get(`http://localhost:5000/blog/${id}`, { crossdomain: true }).then(response => {
      editBlog(response.data.response)

    })

  }




  return (
    <>
      <NavbarAdmin />

      <div id="container1">
        <table id="table">

          <tr id="first">
            <th id="des">Title</th>
            <th id="second">Description</th>
            <th></th>
          </tr>
          <tbody>
            {data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td><div className="btn"><Link to="edit" state={{ flag: false }}><SmallButton text="Edit" onClick={() => handleEditblog(data._id)} id={index} /></Link> <SmallButton text="Delete" onClick={() => deleteblogs(data._id)} />
                  </div></td>
                </tr>
              )
            })}
          </tbody>
          
        </table>
        <div id="lastbutton">
          <div style={{ textAlign: "end", marginTop: "20px" }}><Link to="/admin/blogs/edit" state={{ flag: true }}><Button text="Add" /></Link></div>
        </div>
      </div>



    </>
  )
}

