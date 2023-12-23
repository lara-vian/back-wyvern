import { Request, Response } from "express";
import Login from "../auth/login";

class AuthController{
	public login(req: Request, res: Response){
		Login(req, res);
	}
}

export const authController = new AuthController();