import { RegisterData } from "../../controllers/user/register";
import emailValid from "./emailValidator";
import passwordValid from "./passwordValidator";
import usernameValid from "./usernameValidator";

const registerDataValidator = (userData: RegisterData) => {
  return usernameValid(userData.username)
    .then(username => {
      userData.username = username;
      return emailValid(userData.email)
    })
    .then(email => {
      userData.email = email;
      return passwordValid(userData.password)
    })
    .then(password => {
      userData.password = password;
    })
}

export default registerDataValidator;
