const { Contact } = require("../../model/Contact");

const handleDelete = async (req, res) => {
  await Contact.findOneAndDelete({ _id: req.body.id });
  res.status(200).json({
    message: "contact deleted successfuly",
  });
};

module.exports = { handleDelete };
