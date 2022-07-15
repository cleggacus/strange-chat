import { Request, Response, NextFunction } from "express"

const logout = (_req: Request, res: Response, _next: NextFunction) => {
  res.clearCookie("jwt").status(200).json({
    mes: "Logged out."
  });
}

export default logout;
