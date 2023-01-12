const express = require("express");
import cors from "cors";
import { router } from "./src/routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log("rodou na porta " + port));
