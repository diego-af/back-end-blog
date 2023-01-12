import express from "express";
import cors from "cors";
import { router } from "./app/src/routes/index";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log("rodou na porta " + port));
