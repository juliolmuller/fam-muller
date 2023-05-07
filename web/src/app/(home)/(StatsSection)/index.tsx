'use client';

import {
  ImagesSquare as ImagesSquareIcon,
  Scroll as ScrollIcon,
  UsersThree as UsersThreeIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { floor } from '~/utils/math';

namespace StatsSection {
  export type Props = {
    documents?: number;
    medias?: number;
    members?: number;
    photos?: number;
    users?: number;
  };
}

export default function StatsSection({
  documents = 0,
  medias = 0,
  members = 0,
  photos = 0,
  users = 0,
}: StatsSection.Props) {
  function truncateOverHundred(value: number) {
    const isOver100 = value > 100;
    const roundedValue = isOver100 ? floor(value, -2) : value;
    const stringValue = roundedValue.toString().concat(isOver100 ? '+' : '');
    return stringValue;
  }

  return (
    <section id="stats" className="relative py-8">
      <header className="mb-10 text-4xl text-center lg:text-left">
        A História Sendo Escrita
      </header>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-8">
        <Image
          src="/family-tree.svg"
          alt="ilustração de árvore genealógica"
          height={320}
          width={320}
        />

        <dl className="flex flex-wrap items-center gap-y-8 grow max-w-2xl">
          <dt
            className="basis-1/6 text-brand-800"
            aria-label="qunatidade de membros"
          >
            <UsersThreeIcon color="currentcolor" size={88} />
          </dt>
          <dd className="basis-4/5 pl-4 text-2xl">
            <span className="whitespace-nowrap">
              <strong>{members} membros</strong> registrados.
            </span>{' '}
            <span className="whitespace-nowrap">
              <strong>{users} verificados</strong> e ativos.
            </span>
          </dd>

          <dt
            className="basis-1/6 text-brand-800"
            aria-label="quantidade de fotos"
          >
            <ImagesSquareIcon color="currentcolor" size={88} />
          </dt>
          <dd className="basis-4/5 pl-4 text-2xl">
            <strong>{truncateOverHundred(photos)} fotos</strong> publicadas
          </dd>

          <dt className="basis-1/6 text-brand-800" aria-label="Number of users">
            <ScrollIcon color="currentcolor" size={88} />
          </dt>
          <dd className="basis-4/5 pl-4 text-2xl">
            <strong>{truncateOverHundred(documents + medias)}</strong>{' '}
            documentos, relatos e vídeos
          </dd>
        </dl>
      </div>
    </section>
  );
}
