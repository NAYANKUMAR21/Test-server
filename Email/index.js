const mongoose = require("mongoose");
const express = require("express");
const emailModel = require("./Emial.model");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(
    "mongodb+srv://NAYAN:NAYAN@cluster0.u60zxbv.mongodb.net/PORTFOLIO?retryWrites=true&w=majority"
  );
};

app.get("/", async (req, res) => {
  try {
    const mails = await emailModel.find();
    return res.status(200).send(mails);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, body } = req.body;
  if (!name || !email || !body) {
    return res.status(404).send("Email cannot be sent");
  }
  try {
    const newMail = await emailModel({ name, email, body });
    await newMail.save();
    return res.status(201).send("Email Sent Successfully");
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.listen(8080, async () => {
  await connect();
  console.log("listening to http://localhost:8080");
});
