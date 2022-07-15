import argon from "argon2";
import { LoginData } from "../../../controllers/user/login";
import findUser from "./findUser";

const verifyUser = (userData: LoginData) => {
  return findUser(userData.user)
    .then(async user => {
      const match = await argon.verify(user.password, userData.password);
      
      if(!match)
        throw "Password incorrect.";

      return user;
    })
}

export default verifyUser;
