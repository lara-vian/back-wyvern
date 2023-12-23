import Express from "express";
import { router } from "./router";

export class App{
	public server: Express.Application;

	constructor(){
		this.server = Express();
		this.middleware();
		this.router();
	}
	
	private middleware(){
		this.server.use(Express.json());
	}
	private router(){
		this.server.use(router);
	}
}