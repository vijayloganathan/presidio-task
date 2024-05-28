import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const fetch = async (req, res) => {
  try {
    return res.json("Hello World");
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const { password } = userData;
    const userExist = await User.findOne({ email });
    const password2 = userExist.password;
    if (password2 == password) {
      const user = {
        user: userExist.user,
      };
      res.status(200).json(user);
    } else {
      res.status(200).json("invalid");
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
