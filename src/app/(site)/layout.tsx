import { ReactNode } from 'react'
import '../globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPages } from '../../../sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matheus fonteles BLOG',
  description: 'App desenvolvido por Matheus Fonteles',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // get all pages
  const pages = await getPages()
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            {' '}
            Matheus Portfólio{' '}
          </Link>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => {
              return (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className="hover:underline"
                >
                  {page.title}
                </Link>
              )
            })}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
