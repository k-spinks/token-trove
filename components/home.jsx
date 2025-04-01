import Image from "next/image";

export default function Home () {
  return (
    <section className="flex gap-3 my-9 mx-auto w-max">
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
  )
}