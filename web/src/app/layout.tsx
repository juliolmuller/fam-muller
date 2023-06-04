import './globals.css'
import { Montserrat, Pangolin } from 'next/font/google'
import { ReactNode } from 'react'

export const montserratFont = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export const pangolinFont = Pangolin({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pangolin',
})

namespace RootLayout {
  export type Props = {
    children: ReactNode
  }
}

export default function RootLayout({ children }: RootLayout.Props) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${montserratFont.variable} ${pangolinFont.variable} min-h-screen bg-gray-50 font-sans text-gray-950`}
      >
        {children}

        <footer className="mx-8 mt-8 flex h-24 items-center justify-center border-t border-t-gray-200 text-gray-600">
          <span>
            <strong>LacusSoft &copy;</strong> {new Date().getFullYear()} - All
            Rights Reserved
          </span>
        </footer>
      </body>
    </html>
  )
}
