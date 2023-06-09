import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Button from '~/components/button'

namespace PlatformLayout {
  export type Props = {
    children: ReactNode
  }
}

export default function PlatformLayout({ children }: PlatformLayout.Props) {
  return (
    <>
      <header className="flex items-center gap-4 border-b border-b-gray-200 bg-white px-8 py-4">
        <Link
          className="mr-8 inline-flex items-center gap-4 font-brand text-3xl"
          href="/#root"
        >
          <Image
            src="/logo.svg"
            alt="Müller logo"
            height={40}
            width={40}
            priority
          />
          Müller
        </Link>

        <Button href="/feed" isNav variant="text">
          Feed
        </Button>

        <Button href="/timeline" isNav variant="text">
          Linha do Tempo
        </Button>

        <Button href="/tree" isNav variant="text">
          Árvore Genealógica
        </Button>
      </header>

      <main className="px-8">{children}</main>
    </>
  )
}
