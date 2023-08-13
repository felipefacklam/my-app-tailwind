"use client";
import { useEffect, useState } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
  const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();
  const [personagens, setPersonagens] = useState<any>([]);

  useEffect(() => {
    obterPersonagem()
  }, [])

  async function obterPersonagem() {
    try {
      iniciarProcessamento();
      const resp = await fetch("https://swapi.dev/api/people/");
      const dados = await resp.json();
      setPersonagens(dados.results);
    } finally {
      finalizarProcessamento();
    }
  }

  return {
    personagens,
    processando,
  };
}
