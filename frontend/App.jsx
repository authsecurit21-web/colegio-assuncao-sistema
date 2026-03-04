import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import logo from "./logo.png"; // você vai colocar a logo do colégio aqui na pasta frontend

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !senha) return setMsg("Preencha todos os campos");
    setLoading(true);
    try {
      const res = await axios.post(
        "https://colegio-assuncao-sistema.onrender.com/login",
        { email, senha }
      );
      setMsg(res.data.msg || "Login realizado!");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Erro no login");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${loading ? "loading" : ""}`}>
        <img src={logo} alt="Colégio Assunção" className="logo" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={login}>{loading ? "Carregando..." : "Entrar"}</button>
        <p className="msg">{msg}</p>
      </div>
    </div>
  );
}
