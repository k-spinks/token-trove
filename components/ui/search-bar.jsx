'use client'
import { useRouter } from "next/navigation"
import { Search } from "@deemlol/next-icons"
import { useState } from "react"

export default function SearchBar() {

  const [inputValue, setInputValue] = useState('')
  function handleInputChange(event) {
    setInputValue(event.target.value)
  }
  function handleSearch (event) {
    event.preventDefault()
    alert(`${inputValue}`)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSearch} className="self-center">
      <span className="flex bg-gray-300 items-center p-1 rounded-2xl">
        <input
          type="text"
          placeholder="search..."
          className="rounded-2xl p-1 focus:outline-0"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Search onClick={handleSearch} className="hover:cursor-pointer"/>
      </span>
    </form>
  )
}