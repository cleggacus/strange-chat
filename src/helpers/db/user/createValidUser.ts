import User from "../../../models/user";
import argon from "argon2";
import { registerDataValidator } from "../../validators";
import usernameNotExists from "./usernameNotExists";
import emailNotExists from "./emailNotExists";
import createUser from "./createUser";
import { RegisterData } from "../../../controllers/user/register";

const createValidUser = (userData: RegisterData) => {
  return registerDataValidator(userData)
    .then(() => usernameNotExists(userData.username))
    .then(() => emailNotExists(userData.email))
    .then(() => createUser(userData))
}

export default createValidUser;