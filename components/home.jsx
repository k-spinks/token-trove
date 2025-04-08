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
      db.collection("accessories").find({}).toArray().catch(() => [])
    ])

    const topRated = allBoardGames.filter((game) => game.rating >= 8).slice(0,10)

  return (
    <section className="flex flex-col gap-9 my-9 mx-auto w-max">
      <section className="flex gap-3">
        <div>
          <a href="">
            <Image src="https://placehold.co/500x325" alt="promotional banner" width={500} height={200} />
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
      <div>
        <h2>Top Games</h2>
        <GameCard />
        {/* {topRated ? topRated.map((game) => {
          <div>
            <div key={game._id}>
              <Image src={game.image} alt={`${game.title} box art`} width={100} height={100}/>
            </div>
            <div>
              <h4>{game.title}</h4>
              <h6>{game.price}</h6>
            </div>
          </div>
        }) :
          <div>
            <h2>Failed to Load Top rated</h2>
          </div>
        } */}
      </div>
    </section>
  )
  } catch(e) {
    console.error("Failed to fetch")
  }
}