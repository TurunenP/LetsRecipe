// import { Button } from '@mui/material'
// import axios from 'axios'
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {
//   const navigate = useNavigate()
//   const handleLogout = ()=> {
//     axios.post("http://localhost:3001/logout", 
//       {withCredentials:true})
//       .then(response=>{
// if(response.status===200){
//   navigate('/login')
// }
//       })
//       .catch(error=> {
//         console.log('Error logout: ', error)
//       })
//   }
//   const button = {
//     marginRight: "20px",
//     fontSize: "1.2rem",
//     fontWeight: "700",
//     padding: "0.3rem 1.4rem",
//   };
  
//   return (
//     <Button
//       style={button}
//       color="error"
//       variant="contained"
//       onClick={handleLogout}
//     >
//       Logout
//     </Button>
//   );
// }

// export default Logout


import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsLoggedIn(false); // Ensure this function is passed from a parent component
        navigate("/login");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const button = {
    marginRight: "20px",
    fontSize: "1.2rem",
    fontWeight: "700",
    padding: "0.3rem 1.4rem",
  };

  return (
    <Button
      variant="contained"
      color="error"
      style={button}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default Logout;
