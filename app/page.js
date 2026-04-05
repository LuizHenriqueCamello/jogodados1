"use client";

import { useState } from "react";
import Dado from "@/components/Dado";

export default function Home() {
  const [jogador1, setJogador1] = useState([1, 1]);
  const [jogador2, setJogador2] = useState([1, 1]);

  function jogar() {
    const novoJ1 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];

    const novoJ2 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];

    setJogador1(novoJ1);
    setJogador2(novoJ2);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jogo de Dados</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px"
        }}
      >
        {/* Jogador 1 */}
        <div>
          <h2>Jogador 1</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <Dado valor={jogador1[0]} />
            <Dado valor={jogador1[1]} />
          </div>
        </div>

        {/* Jogador 2 */}
        <div>
          <h2>Jogador 2</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <Dado valor={jogador2[0]} />
            <Dado valor={jogador2[1]} />
          </div>
        </div>
      </div>

      <button onClick={jogar} style={{ padding: "10px", fontSize: "16px" }}>
        Jogar
      </button>
    </div>
  );
}