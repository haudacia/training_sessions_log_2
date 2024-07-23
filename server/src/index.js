import express from "express";
import { connectDB } from "./mongo/connection/index.js";
import cors from "cors";
import router from "./routers/index.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => console.log("Connected to database!"));

app.use("/", router);

const port = process.env.PORT || 3003;

const server = app.listen(port, () => {
  console.log(`Server is up and running ⚡ on ${port}`);
});

export { app, server };
