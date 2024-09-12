// import React from "react";
// import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import Logout from "../Homepage/Logout";
// import Logo from "../../images/Recipe.PNG"; 

// const Navbar = () => {
//   const button = {
//     marginRight: "20px",
//     fontSize: "1.2rem",
//     fontWeight: "700",
//     padding: "0.3rem 1.4rem",
//   };

//   return (
//     <AppBar sx={{ bgcolor: "#333" }}>
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="logo"
//           component={Link}
//           to="/"
//         >
//           <img src={Logo} alt="Logo" style={{ height: "40px" }} />{" "}
//           {/* Use the logo */}
//         </IconButton>
//         <Box sx={{ flexGrow: 1 }} />{" "}
//         {/* This will push the buttons to the right */}
//         <Box>
//           <Button
//             style={button}
//             color="error"
//             variant="contained"
//             to="/login"
//             LinkComponent={Link}
//           >
//             Login
//           </Button>
//           <Button
//             style={button}
//             color="success"
//             variant="contained"
//             to="/signup"
//             LinkComponent={Link}
//           >
//             Signup
//           </Button>
//           <Logout />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logout from "../Homepage/Logout";
import Logo from "../../images/Recipe.PNG";

const Navbar = ({ setIsLoggedIn }) => {
  const button = {
    marginRight: "20px",
    fontSize: "1.2rem",
    fontWeight: "700",
    padding: "0.3rem 1.4rem",
  };

  return (
    <AppBar sx={{ bgcolor: "#333" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          component={Link}
          to="/"
        >
          <img src={Logo} alt="Logo" style={{ height: "40px" }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button
            style={button}
            color="error"
            variant="contained"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            style={button}
            color="success"
            variant="contained"
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
          <Logout setIsLoggedIn={setIsLoggedIn} />{" "}
          {/* Pass setIsLoggedIn if required */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


