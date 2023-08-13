'use client'
import Background from "../components/starwars/Background";
import Personagens from "../components/starwars/Personagens";
import useStarWars from "../data/hooks/useStarWars";

export default function StarWarsPage() {
  const { processando, personagens } = useStarWars();
  return (
    <div className="flex flex-col gap-5 h-screen relative justify-center items-center text-white">
      <Background/>
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens personagens={personagens} />
      ) : (
        <div>Nehnum personagem</div>
      )}
    </div>
  );
}