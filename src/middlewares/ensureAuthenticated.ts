import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  const authtoken = request.headers.authorization;
  if(!authtoken) {
    return response.status(401).end();
  } 
  const [ , token] = authtoken.split(" ")
  try {
    const { sub }  = verify( token , "46f08c7a910bb02374634cd4f7d06118" ) as IPayload;
    request.user_id = sub
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}