import clientPromise from "@/lib/mongodb"

export default async function Page() {
  try{
    const client = await clientPromise
    const db = client.db("token-trove")
    const [topRatedGames, lowStock, allGames] = await Promise.all([
      db.collection("boardgames").find({}).sort({rating:-1}).limit(10).toArray().catch(() => []),
      db.collection("boardgames").find({}).sort({quantity:1}).limit(10).toArray().catch(()=>[]),
      db.collection("boardgames").find({}).toArray().catch(()=>[])
    ])

    return (
      <div className="flex m-auto">
        <div>
          <h2>Top Rated Games</h2>
            <ul>
              {topRatedGames.map((game) => (
                <li key={game._id}>{game.title} - {game.rating}</li>
              ))}
            </ul>
        </div>
        <div>
        <h2>Low Stock</h2>
          <ul>
            {lowStock.map((game) => (
              <li key={game._id}>{game.title} - {game.rating}, {game.quantity}</li>
            ))}
          </ul>
        </div>
      </div>
    )

  }catch(error) {
    return (
    <div>
        <h1>Board Games</h1>
        <p style={{ color: "red" }}>Failed to load board games. Please try again later.</p>
      </div>
    )
  }
}