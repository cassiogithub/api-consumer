'use client'

import { useState } from 'react'
import { CharacterInfo } from './CharacterInfo'
import { Search } from './Search'
import axios from 'axios'

export interface CharacterInfoProperties {
  anime: string
  character: string
  quote: string
}

export function CharacterWrapper() {
  const [search, setSearch] = useState<string | null>(null)
  const [characterInfo, setCharacterInfo] =
    useState<CharacterInfoProperties | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSearchCharacterByName(): Promise<void> {
    try {
      setErrorMessage(null)
      const response = await axios.get<CharacterInfoProperties>(
        `https://animechan.vercel.app/api/random/character?name=${search}`,
      )
      setCharacterInfo(response.data)
    } catch (error: any) {
      setErrorMessage(error.response.data.error)
    }
  }

  return (
    <section className="flex max-w-xl flex-col gap-4 rounded bg-zinc-700 p-8 ">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearchCharacterByName={handleSearchCharacterByName}
      />

      {errorMessage && <p className="text-2xl font-bold">{errorMessage}</p>}
      {characterInfo && <CharacterInfo characterInfo={characterInfo} />}
    </section>
  )
}
