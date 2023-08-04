import Box from "./components/basics/Box";
import Circle from "./components/basics/Circle";

export default function Home() {
  return (
    <main className="flex justify-around items-center
    h-screen">
      <Box>0</Box>
      <Box>1</Box>
      <Circle numb={1} name='One' almostPerfect={true}/>
      <Circle numb={2} name='Two' almostPerfect={false}/>
    </main>
  )
}