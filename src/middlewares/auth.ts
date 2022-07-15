import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

type UserData = {
  id: string,
  username: string,
  email: string
}

export default (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
  try {
    const jwtSecret = process.env.JwtSecret || "";
    const token = req.cookies.jwt;
    const userData = jwt.verify(token, jwtSecret);
      
    if (!userData) {
      return res.status(401).json({
        err: 'Auth failed.'
      });
    }else {
      res.locals.userData = userData;
      next();
    }
  } catch (err) {
    return res.status(401).json({
      err: 'Auth failed.'
    });
  }
};