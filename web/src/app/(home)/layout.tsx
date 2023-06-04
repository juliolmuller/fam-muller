import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import Button from '~/components/button';
import { montserratFont, pangolinFont } from '~/utils/fonts';

namespace HomeLayout {
  export type Props = {
    children: ReactNode;
  };
}

export default function HomeLayout({ children }: HomeLayout.Props) {
  return (
    <html lang="en">
      <body id="root" className={`${montserratFont.variable} ${pangolinFont.variable} font-sans`}>
        <header className="flex items-center justify-between gap-4 lg:container p-4 md:py-8">
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

        <main className="lg:container px-4">{children}</main>

        <footer className="flex items-center justify-center h-24 mt-8 mx-8 border-t-[1px] border-t-gray-200 text-gray-600">
          <span>
            <strong>LacusSoft</strong> {new Date().getFullYear()} &copy; All
            Rights Reserved
          </span>
        </footer>
      </body>
    </html>
  );
}
