import clientPromise from "@/lib/mongodb"
import Image from "next/image";
import GameCard from "./ui/gamecard";

export default async function Home () {

  try {
    const client = await clientPromise
    const db = client.db("token-trove")

     /*
      Promise.all used to avoid request waterfall
      .catch returns an empty array instead of crashing the request on error
    */
    const [allBoardGames, allCardGames, allAccessories] = await Promise.all([
      db.collection("boardgames").find({}).toArray().catch( ()=>[] ),
      db.collection("cardgames").find({}).toArray().catch(() => []),
      db.collection("accessories").find({}).toArray().catch(() => []),
    ])

    const topRated = allBoardGames.filter((game) => game.rating >= 8).slice(0,10)
    const singleGame = allBoardGames.slice(0,1)


  return (
    <section className="flex flex-col gap-9 my-9 mx-auto w-max">
      <section className="flex gap-3">
        <div>
          <a href="">
            <Image src="https://placehold.co/500x325" alt="promotional banner" width={500} height={325} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <a href="">
          <Image src="https://placehold.co/200x150" alt="promotional banner: Free shipping over $75" width={200} height={150} />
        </a>
        <a href="">
          <Image src="https://placehold.co/200x150" alt="promotional banner: Free shipping over $75" width={200} height={150} />
        </a>
        <a href="">
          <Image src="https://placehold.co/200x150" alt="promotional banner: Free shipping over $75" width={200} height={150} />
        </a>
        <a href="">
          <Image src="https://placehold.co/200x150" alt="promotional banner: Free shipping over $75" width={200} height={150} />
        </a>
        </div>
      </section>
      <di>
        <h2>Top Games</h2>
        {!singleGame ?
          <span>Game not loading in time</span>
          :
          <GameCard props={singleGame}/>
        }
      </di>
    </section>
  )
  } catch(e) {
    console.error("Failed to fetch")
  }
}