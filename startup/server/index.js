import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
