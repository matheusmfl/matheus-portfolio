import { ReactNode } from 'react'
import '../globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matheus fonteles BLOG',
  description: 'App desenvolvido por Matheus Fonteles',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            {' '}
            Matheus Portfólio{' '}
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
