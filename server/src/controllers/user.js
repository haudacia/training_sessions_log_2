import User from "../schemas/user.schema.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const newUser = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
      createdAt: new Date(),
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};

export { getAllUsers, createUser };
