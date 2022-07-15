import User from "../../../models/user";

const findUser = (user: string) => {
  let query = {};

  if(/[@]/.test(user))
    query = {email: user};
  else
    query = {username: user};

  return User.findOne(query).exec()
    .then(user => {
      if(!user)
        throw "User doesn't exist."

      return user;
    });
}

export default findUser;
