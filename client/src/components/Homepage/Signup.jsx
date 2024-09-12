// import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {

//   const heading={fontSize:'2.5rem', fontWeight:600}
//   const paperStyle = {
//     padding: "2rem",
//     margin: "100px auto",
//     borderRadius: "1rem",
//     boxShadow: "10px 10px 10px",
//   };
//    const row = { display: "flex", marginTop: "2rem" };
//    const btnStyle = {
//      marginTop: "2rem",
//      fontSize: "1.2rem",
//      fontWeight: "700",
//      backgroundColor: "blue",
//      borderRadius: "0.5rem",
//    };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup =(e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/signup", { name, email, password })
//       .then(result => {
//         if(result.status==201) {
// console.log('User created succesfully')
// navigate('/login')
//         }       
//       })
//       .catch(err=>{
//        if (err.response && err.response.status === 400) {
//          window.alert("Email already exists. Please, use another email");
//        } else {
//          console.log(err);
//        }
//       })
//      }
 
//   return (
//     <Grid align="center">
//       <Paper
//         style={paperStyle}
//         sx={{
//           width: {
//             xs: "80vw",
//             sm: "50vw",
//             md: "40vw",
//             lg: "30vw",
//             xl: "20vw",
//           },
//           // height: "60vh",
//         }}
//       >
//         <Typography style={heading}>Signup</Typography>
//         <form onSubmit={handleSignup}>
//           <TextField
//             onChange={(e) => setName(e.target.value)}
//             style={row}
//             required
//             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
//             label="Enter Name"
//             type="text"
//             name="name"
//           />
//           <TextField
//             onChange={(e) => setEmail(e.target.value)}
//             style={row}
//             name="email"
//             required
//             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
//             label="Enter Email"
//             type="email"
//           />
//           <TextField
//             onChange={(e) => setPassword(e.target.value)}
//             style={row}
//             name="password"
//             required
//             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
//             label="Password"
//             type="password"
//           />
//           <Button style={btnStyle} variant="contained" type="submit">
//             SignUp
//           </Button>
//         </form>
//       </Paper>
//     </Grid>
//   );
// }

// export default Signup

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const heading = { fontSize: "2.5rem", fontWeight: 600, marginBottom: "2rem" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 10px",
  };
  const inputStyle = { width: "100%" }; // Full width for inputs
  const btnStyle = {
    marginTop: "1.5rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    backgroundColor: "blue",
    borderRadius: "0.5rem",
    width: "100%", // Full width for the button
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        if (result.status === 201) {
          console.log("User created successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please, use another email");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Paper
        style={paperStyle}
        sx={{
          width: {
            xs: "80vw",
            sm: "50vw",
            md: "40vw",
            lg: "30vw",
            xl: "20vw",
          },
        }}
      >
        <Typography style={heading}>Signup</Typography>
        <form onSubmit={handleSignup}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                required
                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                label="Enter Name"
                type="text"
                name="name"
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                name="email"
                required
                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                label="Enter Email"
                type="email"
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                name="password"
                required
                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item>
              <Button style={btnStyle} variant="contained" type="submit">
                SignUp
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
