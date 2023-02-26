const { Contact } = require("../../model/Contact");

const handleEdite = async (req, res) => {
  await Contact.findOneAndUpdate(
    { _id: req.body.id },
    {
      name: req.body.updateContacts.name,
      number: req.body.updateContacts.number,
    }
  );
  res.status(200).json({
    message: "updated succesfuly",
  });
};

module.exports = { handleEdite };
