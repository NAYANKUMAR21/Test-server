const express = require("express");
const app = express.Router();
const argon2 = require("argon2");
const loginModel = require("./login.model");
const { find } = require("../Emial.model");
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send("Login Falied");
  }
  try {
    const user = await loginModel.findOne({ email: email });
    if (user && (await argon2.verify(user.password, "password"))) {
      return res.status(201).send(true);
    } else {
      return res.status(403).send("Un-Authorized");
    }
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send("Login Falied");
  }
  try {
    const hash = await argon2.hash("password");
    console.log(hash);
    const newUSer = await loginModel({ email, password: hash });
    await newUSer.save();
    return res.status(201).send("User Sucessfully created");
  } catch (er) {
    return res.status(404).send(er.message);
  }
});
module.exports = app;
