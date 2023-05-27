import { ReactNode } from 'react'

export function MainWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen bg-zinc-900">
      <div className="container mx-auto">{children}</div>
    </main>
  )
}
