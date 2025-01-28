const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // 1. check user already exits in database user
    const { username, password } = req.body; // get input from client that attach with body

    let user = await User.findOne({ username });
    if (user) return res.send("User Already Exit!!").status(400);

    // 2. if dont have user in data base then create user to database
    // Encrypt
    const salt = await bcrypt.genSalt(10);
    // user from above line is null
    user = new User({
      username,
      password,
    });

    user.password = await bcrypt.hash(password, salt); // encrypt user's password with salt

    // save to database
    await user.save();
    res.send("Register Success!!");
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    // 1. check user
    const { username, password } = req.body;
    let user = await User.findOneAndUpdate({ username }, { new: true });

    // if have user's username in database
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password); // compare user,s password with hash

      if (!isMatch) {
        return res.status(400).send("Password Invalid!");
      }

      // 2. payload => prepare user's data that i want send to client
      // we should don't send password to client
      let payload = {
        user: {
          username: user.username,
          role: user.role,
        },
      };

      // 3. Generate
      jwt.sign(
        payload,
        "jwtsecret",
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token, payload });
        }
      );
    } else {
      return res.status(400).send("User not found!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
