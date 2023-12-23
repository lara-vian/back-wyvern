import { App } from "./app";
import cors from "cors"

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

const app = new App()

app.server.use(cors(corsOptions))
app.server.listen(2000, () => {
	console.log("Server running on port 2000");
})