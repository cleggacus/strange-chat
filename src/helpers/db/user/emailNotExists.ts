import User from "../../../models/user";

const emailNotExists = (email: string) => {
  return User.find({ email }).exec()
    .then(email => {
      if (email.length >= 1) 
        throw "Email exists.";
    })
}

export default emailNotExists;
