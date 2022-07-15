import { Request, Response, NextFunction } from "express"

const auth = (_req: Request, res: Response, _next: NextFunction) => {
  if(res.locals.userData)
    res.status(200).json({
      userData: res.locals.userData
    })
  else
    res.status(401).json({
      err: "Auth failed."
    })
}

export default auth;
