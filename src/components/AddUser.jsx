import React, {  useState } from 'react'
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../styles/Users.css"


const URL = "https://667256d76ca902ae11afe79a.mockapi.io/api/v1/users";

function AddUser() {
  const [name , setName] = useState()
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState(0);
  const [cash, setCash] = useState(0);

  
  const formSubmit = (e) =>{
    e.preventDefault()
   const userData = {
     name: name,
     id: id,
     email: email,
     age: age ,
     cash: cash
   };
   alert("User successfully added");
    axios.post(URL, userData).then((response) => {
    return response.data
   });
  }
  return (
    <>
    <div className='new-user'>
      <h1>  NEW USER</h1>
      <form onSubmit={formSubmit} className="add-user">
        <TextField  label="name" variant="outlined" required  onChange={(e) => setName(e.target.value)}/>
        <TextField  label="id" variant="outlined" required  onChange={(e) => setId(e.target.value)}/>
        <TextField  label="email" variant="outlined" required  onChange={(e) => setEmail(e.target.value)}/>
        <TextField type='number'  label="age" variant="outlined" onChange={(e) => setAge(e.target.value)}/>
        <TextField type='number'  label="cash" variant="outlined" onChange={(e) => setCash(e.target.value)} />
          <div className='addBtn'>
        <Button type='submit'  variant="contained" disableElevation color="success"> Add new user</Button>
      </div>
      </form>
      </div>
    </>
  );
}

export default AddUser