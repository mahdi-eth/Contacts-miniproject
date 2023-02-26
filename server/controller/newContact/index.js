const { Contact } = require("../../model/Contact");
const jwt = require("jsonwebtoken");

const handleNewContact = async (req, res) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, "secretKey01", async function (err, decoded) {
      if (err) return res.status(401).json({ message: "unauthorizaed" });
      if (!req?.body?.name)
        return res.status(400).json({
          message: "no name entered",
        });
      if (!req.body.number)
        return res.status(400).json({ message: "number is empty" });
    
      const duplicateContact = await Contact.findOne({ number: req.body.number });
      if (duplicateContact) {
        return res.status(400).json({ message: "This number already exists" });
      };
      const contact = new Contact({
        name: req.body.name,
        number: req.body.number,
      });
    
      contact.save((err) => {
        console.log(err);
      });
      res.status(201).json({
        message: "contact created",
      });
    });
  };
};

module.exports = { handleNewContact };
