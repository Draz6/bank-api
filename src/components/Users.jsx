import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import loading from "../img/loading.gif";
import { getData, edit, deleteUser} from "../api/api";
import AddUser from "./AddUser";
import "../styles/Users.css";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    async function getDataFromApi() {
     try {
       const userData= await getData();
       setUsers(userData);
       setIsLoading(false);
     } catch (error) {
       console.log(error);
     }
   }
   getDataFromApi();
 }, [users]);

  return (
    <>
      <h1 className="title">USERS DATA</h1>
      <AddUser />
      {isLoading ? (<div className="loading"><img src={loading} alt=""/>Loading…</div>):(
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">AGE</TableCell>
              <TableCell align="right">CASH</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.cash}</TableCell>
                <Button  className="btn" variant="contained" size="small" onClick={() => edit(user.id)}>
                  Edit
                </Button>

                <Button variant="contained" size="small" color="error" onClick={() => deleteUser(user.id)}>
                  Remove
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)}
    </>
  );
}
