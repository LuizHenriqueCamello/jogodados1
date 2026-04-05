"use client";

import { useState } from "react";
import Dado from "@/components/Dado";

export default function Home() {
  const [jogador1, setJogador1] = useState([1, 1]);
  const [jogador2, setJogador2] = useState([1, 1]);
  const [resultado, setResultado] = useState("");
  const [rodada, setRodada] = useState(1);
  const [placar, setPlacar] = useState({ j1: 0, j2: 0 });
  const [vez, setVez] = useState(1);
  const [rolando, setRolando] = useState(false);

  function jogar(jogador) {
    if (rodada > 5 || rolando) return;

    setRolando(true);

    let count = 0;
    const intervalo = setInterval(() => {
      const temp = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];

      if (jogador === 1) setJogador1(temp);
      else setJogador2(temp);

      count++;
      if (count > 8) {
        clearInterval(intervalo);

        const dadosFinal = [
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1
        ];

        if (jogador === 1) {
          setJogador1(dadosFinal);
          setVez(2);
        } else {
          setJogador2(dadosFinal);

          const soma1 = jogador1[0] + jogador1[1];
          const soma2 = dadosFinal[0] + dadosFinal[1];

          if (soma1 > soma2) {
            setResultado("Jogador A Venceu");
            setPlacar(p => ({ ...p, j1: p.j1 + 1 }));
          } else if (soma2 > soma1) {
            setResultado("Jogador B Venceu");
            setPlacar(p => ({ ...p, j2: p.j2 + 1 }));
          } else {
            setResultado("Empate");
          }

          setRodada(r => r + 1);
          setVez(1);
        }

        setRolando(false);
      }
    }, 80);
  }

  function reiniciar() {
    setJogador1([1, 1]);
    setJogador2([1, 1]);
    setResultado("");
    setRodada(1);
    setPlacar({ j1: 0, j2: 0 });
    setVez(1);
  }

  let resultadoFinal = "";
  if (rodada > 5) {
    if (placar.j1 > placar.j2)
      resultadoFinal = `Jogador A venceu (${placar.j1} x ${placar.j2})`;
    else if (placar.j2 > placar.j1)
      resultadoFinal = `Jogador B venceu (${placar.j2} x ${placar.j1})`;
    else resultadoFinal = `Empate (${placar.j1} x ${placar.j2})`;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f2f2f2",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "32px" }}>
        {rodada <= 5 ? `Rodada ${rodada}` : "Fim de jogo"}
      </h2>

      <h3 style={{ textAlign: "center", fontSize: "24px" }}>
        {placar.j1} x {placar.j2}
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "60px"
        }}
      >
        {/* Jogador A */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "15px" }}>
            <Dado valor={jogador1[0]} size={100} />
            <Dado valor={jogador1[1]} size={100} />
          </div>

          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            {resultado.includes("A")
              ? "Jogador A Venceu"
              : resultado.includes("B")
              ? "Jogador A Perdeu"
              : ""}
          </p>

          <button
            onClick={() => jogar(1)}
            disabled={vez !== 1 || rodada > 5 || rolando}
            style={{
              marginTop: "25px",
              padding: "14px 40px",
              borderRadius: "25px",
              border: vez === 1 ? "3px solid black" : "2px solid #999",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              background: "linear-gradient(to right, white 50%, black 50%)",
              opacity: vez === 1 ? 1 : 0.6,
              transition: "0.2s"
            }}
          >
            <span style={{ color: "black" }}>Jogar</span>
            <span style={{ color: "white" }}> Dado</span>
          </button>
        </div>

        {/* Jogador B */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "15px" }}>
            <Dado valor={jogador2[0]} size={100} />
            <Dado valor={jogador2[1]} size={100} />
          </div>

          <p style={{ marginTop: "15px", fontSize: "18px" }}>
            {resultado.includes("B")
              ? "Jogador B Venceu"
              : resultado.includes("A")
              ? "Jogador B Perdeu"
              : ""}
          </p>

          <button
            onClick={() => jogar(2)}
            disabled={vez !== 2 || rodada > 5 || rolando}
            style={{
              marginTop: "25px",
              padding: "14px 40px",
              borderRadius: "25px",
              border: vez === 2 ? "3px solid black" : "2px solid #999",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              background: "linear-gradient(to right, white 50%, black 50%)",
              opacity: vez === 2 ? 1 : 0.6,
              transition: "0.2s"
            }}
          >
            <span style={{ color: "black" }}>Jogar</span>
            <span style={{ color: "white" }}> Dado</span>
          </button>
        </div>
      </div>

      {rodada > 5 && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "28px" }}>{resultadoFinal}</h2>
          <button
            onClick={reiniciar}
            style={{
              padding: "12px 25px",
              borderRadius: "10px",
              marginTop: "10px"
            }}
          >
            Jogar novamente
          </button>
        </div>
      )}
    </div>
  );
}