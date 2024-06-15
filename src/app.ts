import cors from "cors";
import express, { Application } from "express";
import notFound from "./app/middleware/notFound";
import { Routers } from "./app/routes";
const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// app.get("/api/v1", Routers);
app.use("/api", Routers);

app.use(notFound);
export default app;
