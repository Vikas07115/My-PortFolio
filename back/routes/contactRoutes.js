import express from "express";
import ContactModel from "../models/contactModel.js";


const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
