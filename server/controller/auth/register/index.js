const bcrypt = require("bcrypt");
const { User } = require("../../../model/User");

const handleRegister = async (req, res) => {
  if (!req?.body?.email)
    return res.status(400).json({
      message: "no email entered",
    });
  if (!req.body.password)
    return res.status(400).json({ message: "password is empty" });
  if (req?.body?.password !== req?.body?.repeatPassword)
    return res.status(400).json({
      message: "passwords don't match",
    });

  const duplicateUser = await User.findOne({ email: req.body.email });
  if (duplicateUser) {
    return res
      .status(400)
      .json({ message: "This email already exists, Login instead" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 8);
  const user = new User({ email: req.body.email, password: hashedPassword });
  user.save((err) => {
    console.log(err);
  });
  res.status(201).json({
    message: "user created",
  });
};

module.exports = { handleRegister };
