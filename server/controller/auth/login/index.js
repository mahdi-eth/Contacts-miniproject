const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../../model/User");

const handleLogin = async (req, res) => {
  if (!req?.body?.email)
    return res.status(400).json({
      message: "no email entered",
    });
  if (!req?.body?.password)
    return res.status(400).json({
      message: "no password",
    });

  const findUser = await User.findOne({ email: req.body.email });

  if (!findUser) return res.status(404).json({ message: "user dosn't exist" });

  bcrypt.compare(req.body.password, findUser.password, function (err, result) {
    if (result) {
      const tokenDetail = {
        id: findUser._id,
        emial: findUser.email,
      };
      const token = jwt.sign(tokenDetail, "secretKey01");
      return res.status(200).json({
        message: "loged in",
        token,
      });
    }
    return res.status(404).json({ message: "incorrect username or password" });
  });
};

module.exports = { handleLogin };
