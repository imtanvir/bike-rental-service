import express, { Application } from "express";
import notFound from "./app/middleware/notFound";
const app: Application = express();
const port = 3000;
app.use(express.json());
// app.get("/api/v1", Routers);
app.get("/api/v1", (req, res) => {
  res.send("Hello bike!");
});

app.use(notFound);
export default app;
