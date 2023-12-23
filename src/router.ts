import { Router } from "express";
import bodyParser from "body-parser";
import { firstController } from "./app/controllers/firstController";
import { authController } from "./app/controllers/authController";

const router: Router = Router();


router.use(bodyParser.json());
router.get("/", firstController.home);
router.post("/login", authController.login);

export { router }