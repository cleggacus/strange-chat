import { Request, Response, NextFunction } from "express"
import createValidUser from "../../helpers/db/user/createValidUser";

type RegisterData = {
  username: string,
  email: string,
  password: string
};

const register = (req: Request<{}, {}, RegisterData>, res: Response, next: NextFunction) => {
  createValidUser(req.body)
    .then(data => {
      res.status(201).json({
        user: {
          id: data._id,
          username: data.username,
          email: data.email
        },
        mes: "User was created successfully"
      });
    })
    .catch(err => {
      if(typeof err != "string")
        err = "Server error.";

      res.status(500).json({ err });
    });
};

export default register;

export type {
  RegisterData
}
