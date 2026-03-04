import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend do Colégio Assunção está funcionando 🚀" });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
