import GameCard from "../ui/gamecard"

export default function CardGrid() {
  return (
    <div className="grid grid-cols-5 gap-4 w-5/6 mx-auto">
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
      <GameCard title='The Breach' id={3} price='$100' quantity={4} imagesrc={'/the_breach.webp'}/>
    </div>
  )
}