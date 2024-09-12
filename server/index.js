const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const UserModel = require("./model/User"); 
const session = require("express-session"); 

dotenv.config();
const app = express();
app.use(express.json());

async function findUser() {
  const user = await UserModel.findOne({ email: "test@gmail.com" });
  console.log(user);
}

findUser();

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);


mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
    const users = await UserModel.find();
    for (const user of users) {
      // Only hash if it's not already hashed
      if (!user.password.startsWith("$2b$")) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        await user.save();
      }
    }
    console.log("Passwords hashed successfully");
    //mongoose.disconnect();
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });

  app.post('/signup', async (req, res) => {
    try{
        const {name, email, password} =req.body

        console.log(name+' '+email+' '+password)
        const existingUser = await UserModel.findOne({email}) ;
        console.log(existingUser)
        if(existingUser) {
          return res.status(400).json({error: 'Email already exists'}) ;
          }
          const hashedPassword = await bcrypt.hash(password, 10) ;
          const newUser = new UserModel({name, email, password: hashedPassword}) ;
          const savedUser = await newUser.save() ;
          res.status(201).json(savedUser) ;
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
  })

  // app.post("/login", async (req, res) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await UserModel.findOne({ email });
  //     if (user) {
  //       const passwordMatch = await bcrypt.compare(password, user.password);
  //       if (passwordMatch) {
  //         res.json({ message: "Success" });
  //       } else {
  //         res.status(401).json({ error: "Password does not match" });
  //       }
  //     } else {
  //       res.status(401).json({ error: "No Records Found" });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // });

  app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(`Login attempt with email: ${email}`);
      const user = await UserModel.findOne({ email });
      if (user) {
        console.log("User found:", user);
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          console.log("Password matches");
          res.json({ message: "Success" });
        } else {
          console.log("Password does not match");
          res.status(401).json({ error: "Password does not match" });
        }
      } else {
        console.log("User not found");
        res.status(401).json({ error: "No Records Found" });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/logout', (req,res)=>{
    if (req.session){
      req.session.destroy(err=>{
        if(err){
          res.status(500).json({error: 'Failed to logout'})
        }
        else{
          res.status(200).json('Logout successful')
        }
      })
    }else{
      res.status(400).json({error: 'No sesseion found'})
    }
  })
