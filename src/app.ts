import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { setApiRouter } from "./Routes/setApiRouter";
import { connectMongoDb } from "./DB/connection";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());

setApiRouter(app);

connectMongoDb();

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
