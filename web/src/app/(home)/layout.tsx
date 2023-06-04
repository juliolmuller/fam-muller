import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Button from '~/components/button'

namespace HomeLayout {
  export type Props = {
    children: ReactNode
  }
}

export default function HomeLayout({ children }: HomeLayout.Props) {
  return (
    <>
      <header className="flex items-center justify-between gap-4 p-4 lg:container md:py-8">
        <Link
          className={'inline-flex items-center gap-4 font-brand text-5xl'}
          href="/#root"
        >
          <Image
            src="/logo.svg"
            alt="Müller logo"
            height={60}
            width={60}
            priority
          />
          Müller
        </Link>

        <div className="flex items-center gap-4">
          <Button href="#about" variant="text">
            Sobre a Família
          </Button>

          <Button href="#stats" variant="text">
            Recursos da Plataforma
          </Button>

          <Button>Entrar</Button>
        </div>
      </header>

      <main className="px-4 lg:container">{children}</main>
    </>
  )
}
