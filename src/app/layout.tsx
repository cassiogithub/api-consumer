import './globals.css'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import { MainHeader } from '@/components/root/MainHeader'
import { MainWrapper } from '@/components/root/MainWrapper'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Anime API Consumer - by: Cássio Rodrigues',
  description: 'This is a project test in nextjs for tests with consumers api.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <MainHeader />
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  )
}
