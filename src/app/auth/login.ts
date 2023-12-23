import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { User } from "../types/index";

export default function Login(req: Request, res: Response) {
	const { username, password }: User = req.body;

	// try {
	// 	const user = UsersModel.findOne(username);
	// 	if (user || user.comparePassword(password)) {
	// 		res.sendStatus(200);
	// 		const token = GenerateToken(user);
	// 		res.json({ token });
	// 		console.log("Login realizado com sucesso");
	// 	} else {
	// 		res.sendStatus(401);
	// 	}
	// } catch (erro) {
	// 	res.sendStatus(500).json(erro);
	// }
}

function GenerateToken(user: User) {
	const payload = {
		name: user.name,
		email: user.email,
		username: user.username,
		password: user.password,
	};
	const options = {
		expiresIn: "1d",
	};
	const secretKey = process.env.SECRET_KEY as Secret;

	const token = jwt.sign(payload, secretKey, options);
	return token;
}
