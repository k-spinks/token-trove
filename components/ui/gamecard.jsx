import Image from "next/image"

export default function GameCard({props: [game]}) {

  const {title, price, quantity, image} = game
  return (
    <div className="flex flex-col bg-gray-200 rounded-3xl items-center shadow-md">
      <div>
        <Image src={`/${image}`} alt={`${title} board game box art`} width={200} height={200}/>
      </div>
      <div className="self-center">
        <h2>{price}</h2>
        <h3>{title}</h3>
        <h4>Quantity: {quantity}</h4>
      </div>
    </div>
  )
}