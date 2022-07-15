import { Request, Response, NextFunction } from "express"

import jwt from "jsonwebtoken";
import verifyUser from "../../helpers/db/user/verifyUser";

type LoginData = {
  user: string,
  password: string
}

const login = (req: Request<{}, {}, LoginData>, res: Response, _next: NextFunction) => {
  const jwtSecret = process.env.JwtSecret || "";

  console.log(req.body);

  verifyUser(req.body)
    .then(user => {
      const token = jwt.sign({
          id: user._id,
          username: user.username,
          email: user.email
        }, 
        jwtSecret
      );

      return res.cookie('jwt', token, {
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 365)),
        httpOnly: true
      }).status(200).json({
        mes: "Auth successful.",
        token: token
      });
    })
    .catch(() => {
      return res.status(401).json({
        err: "Auth failed."
      });
    });
}

export default login;

export type {
  LoginData
}
