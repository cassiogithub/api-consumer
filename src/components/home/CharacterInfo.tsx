import { CharacterInfoProperties } from './CharacterWrapper'

interface CharacterInfoProps {
  characterInfo: CharacterInfoProperties
}

export function CharacterInfo({ characterInfo }: CharacterInfoProps) {
  const { anime, quote, character } = characterInfo
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between">
        <div>
          <label className="text-sm">Personagem</label>
          <p className="text-lg font-normal">{character}</p>
        </div>
        <div>
          <label className="ml-auto block w-full text-end text-sm ">
            Anime
          </label>
          <p className="text-lg font-normal">{anime}</p>
        </div>
      </header>

      <div>
        <label className="ml-auto block w-full text-sm ">
          Citou em algum momento
        </label>
        <p className="text-lg font-normal">{quote}</p>
      </div>
    </div>
  )
}
