import { CharacterWrapper } from '@/components/home/CharacterWrapper'

export default function Home() {
  return (
    <div className="mt-4 flex justify-between gap-4 text-zinc-50">
      <section className="flex border border-red-500 p-8">esquerdo</section>

      <CharacterWrapper />
    </div>
  )
}
