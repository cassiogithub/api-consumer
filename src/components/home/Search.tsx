'use client'

import { Dispatch, SetStateAction } from 'react'

interface SearchProps {
  search: string | null
  setSearch: Dispatch<SetStateAction<string | null>>
  handleSearchCharacterByName: () => Promise<void>
}

export function Search({
  search,
  setSearch,
  handleSearchCharacterByName,
}: SearchProps) {
  return (
    <div className="flex h-8">
      <input
        type="text"
        name="buscar"
        placeholder="Digite o nome do personagem"
        value={search ?? ''}
        onChange={(event) => setSearch(event.target.value)}
        className="w-96 rounded rounded-r-none border-none px-2 font-bold text-zinc-900 outline-none focus:bg-zinc-50"
      />
      <input
        type="button"
        value="Buscar Personagem"
        className="cursor-pointer rounded  rounded-l-none border-0 bg-zinc-800 px-2 outline-none hover:bg-zinc-900"
        onClick={handleSearchCharacterByName}
      />
    </div>
  )
}
