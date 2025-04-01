import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "@deemlol/next-icons"
import SearchBar from "./search-bar"

export default function NavBar() {

  return (
  <nav className="flex w-4/5 justify-between mx-auto mb-9 items-center">
      <div className="flex justify-between w-2/6">
        <Link href={'/'}>
          <div>
            <Image src={'/token_trove_logo.png'} alt="token trove logo" width={125} height={125}/>
          </div>
        </Link>
        <SearchBar />
      </div>
      <div className="flex justify-between w-3/6">
        <Link className="hover:text-blue-700" href={'/'}>Home</Link>
        <Link className="hover:text-blue-700" href={'/boardgames'}>Board Games</Link>
        <Link className="hover:text-blue-700" href={'/cardgames'}>Card Games</Link>
        <Link className="hover:text-blue-700" href={'/accessories'}>Accessories</Link>
        <Link className="hover:text-blue-700" href={'/account'}>Account</Link>
        <Link className="hover:cursor-pointer" href={'/checkout'}>
          <ShoppingBag/>
        </Link>
      </div>
    </nav>
  )
}