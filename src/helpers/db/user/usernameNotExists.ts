import User from "../../../models/user";

const usernameNotExists = (username: string) => {
  return User.find({ username }).exec()
    .then(username => {
      if (username.length >= 1) 
        throw "Username exists.";
    })
}

export default usernameNotExists;
