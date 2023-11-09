import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { setApiRouter } from "./Routes/setApiRouter";
import { connectMongoDb } from "./DB/connection";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

setApiRouter(app);

connectMongoDb();

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
