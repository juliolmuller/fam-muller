import Image from 'next/image'

export default function FeedPage() {
  return (
    <div className="flex h-[60vh] flex-col justify-between">
      <div className="text-4xl text-brand-800 lg:container">
        Linha do Tempo (under construction)
      </div>

      <Image
        className="self-center"
        alt="page under construction"
        src="/under-construction.svg"
        height={600}
        width={600}
      />
    </div>
  )
}
