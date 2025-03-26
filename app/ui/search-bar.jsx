'use client'
import { useRouter } from "next/navigation"
import { Search } from "@deemlol/next-icons"

export default function SearchBar() {

  const handleSearch = () => {

  }
  return (
    <form onSubmit={handleSearch}>
      <span className="flex bg-gray-300 items-center self-center p-1 rounded-2xl">
        <input
          type="text"
          placeholder="search..."
          className="rounded-2xl p-1 focus:outline-0"
        />
        <Search className="hover:cursor-pointer"/>
      </span>
    </form>
  )
}