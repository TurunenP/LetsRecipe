// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import {
// //   Grid,
// //   Link,
// //   Button,
// //   Paper,
// //   TextField,
// //   Typography,
// // } from "@mui/material";

// // const Login = () => {
// //   const heading = { fontSize: "2.5rem", fontWeight: 600 };
// //   const paperStyle = {
// //     padding: "2rem",
// //     margin: "100px auto",
// //     borderRadius: "1rem",
// //     boxShadow: "10px 10px 10px",
// //   };
// //   const row = { display: "flex", marginTop: "2rem" };
// //   const btnStyle = {
// //     marginTop: "2rem",
// //     fontSize: "1.2rem",
// //     fontWeight: "700",
// //     backgroundColor: "blue",
// //     borderRadius: "0.5rem",
// //   };

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault(); 
// //     axios
// //       .post("http://localhost:3001/login", { email, password })
// //       .then((result) => {
// //         if (result.data === "Success") {
// //           navigate("/home");
// //         } else {
// //           alert("Login failed: User does not exist");
// //         }
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   return (
// //     <Grid align="center">
// //       <Paper
// //         style={paperStyle}
// //         sx={{
// //           width: {
// //             xs: "80vw",
// //             sm: "50vw",
// //             md: "40vw",
// //             lg: "30vw",
// //             xl: "20vw",
// //           },
// //           height: "60vh",
// //         }}
// //       >
// //         <Typography style={heading}>Login</Typography>
// //         <form onSubmit={handleLogin}>
// //           <TextField
// //             onChange={(e) => setEmail(e.target.value)}
// //             style={row}
// //             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
// //             label="Enter Email"
// //             type="email"
// //             name="email"
// //             required
// //           />
// //           <TextField
// //             onChange={(e) => setPassword(e.target.value)}
// //             style={row}
// //             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
// //             label="Password"
// //             type="password"
// //             name="password"
// //             required
// //           />
// //           <Button style={btnStyle} variant="contained" type="submit">
// //             Login
// //           </Button>
// //         </form>
// //       </Paper>
// //     </Grid>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Grid, Button, Paper, TextField, Typography } from "@mui/material";

// const Login = () => {
//   const heading = { fontSize: "2.5rem", fontWeight: 600 };
//   const paperStyle = {
//     padding: "2rem",
//     margin: "100px auto",
//     borderRadius: "1rem",
//     boxShadow: "10px 10px 10px",
//   };
//   const row = { 
//     // display: "flex", 
//     marginTop: "1rem" ,};

//   const btnStyle = {
//     marginTop: "2rem",
//     fontSize: "1.2rem",
//     fontWeight: "700",
//     backgroundColor: "blue",
//     borderRadius: "0.5rem",
    
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   console.log(`Email: ${email}, Password: ${password}`);
//   //   axios
//   //     .post("http://localhost:3001/login", { email, password })
//   //     .then((result) => {
//   //       if (result.data === "Success") {
//   //         navigate("/home");
//   //       } else {
//   //         alert("Login failed: User does not exist");
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.error(
//   //         "Login error:",
//   //         err.response ? err.response.data : err.message
//   //       );
//   //     });
//   // };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/login", { email, password })
//       .then((result) => {
//         if (result.data.message === "Success") {
//           // Check the exact structure of the response
//           // navigate("/home");
//            navigate("/");
          
//         } else {
//           alert("Login failed: User does not exist");
//         }
//       })
//       .catch((err) => {
//         console.error(
//           "Login error:",
//           err.response ? err.response.data : err.message
//         );
//       });
//   };


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
//           height: "auto",
//         }}
//       >
//         <Typography style={heading}>Login</Typography>
//         <form onSubmit={handleLogin}>
//           <TextField
//             onChange={(e) => setEmail(e.target.value)}
//             style={row}
//             fullWidth
//             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
//             label="Enter Email"
//             type="email"
//             name="email"
//             required
//             autoComplete="email"
//           />
//           <TextField
//             onChange={(e) => setPassword(e.target.value)}
//             style={row}
//             sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
//             label="Password"
//             type="password"
//             name="password"
//             required
//             autoComplete="current-password"
//           />
//           <Button style={btnStyle} variant="contained" type="submit">
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </Grid>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Button, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.message === "Success") {
          navigate("/");
        } else {
          alert("Login failed: User does not exist");
        }
      })
      .catch((err) => {
        console.error(
          "Login error:",
          err.response ? err.response.data : err.message
        );
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
        <Typography style={heading}>Login</Typography>
        <form onSubmit={handleLogin}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                label="Enter Email"
                type="email"
                name="email"
                required
                autoComplete="email"
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                label="Password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
              />
            </Grid>
            <Grid item>
              <Button style={btnStyle} variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
