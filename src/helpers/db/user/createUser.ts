import User from "../../../models/user";
import argon from "argon2";
import { RegisterData } from "../../../controllers/user/register";

const createUser = (userData: RegisterData) => {
  return argon.hash(userData.password)
    .then(hash => {
      const user = new User({
        username: userData.username,
        email: userData.email,
        password: hash
      });

      return user.save();
    })
}

export default createUser;