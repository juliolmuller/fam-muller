'use client';

namespace AboutSection {
  export type Props = {};
}

export default function AboutSection({}: AboutSection.Props) {
  return (
    <section
      id="about"
      className="relative text-brand-900 bg-current shadow-[-50vw_0_currentcolor,50vw_0_currentcolor] py-8"
    >
      <header className="mb-8 text-white text-4xl text-center lg:text-left">
        Sobre a Família Müller
      </header>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
        <img
          className="amax-h-80 w-full max-w-xl lg:w-[35%] lg:-translate-y-8"
          src="https://images.unsplash.com/photo-1542216515-4e6a586c1ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwZmFtaWx5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="old family photo"
        />

        <div className="grow flex flex-col gap-4 text-white">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, dolore in quas et, temporibus accusamus
            voluptas sunt totam officia. Ducimus quos error voluptates.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            cupiditate veritatis officia vel corrupti obcaecati culpa voluptate
            qui accusantium id, non voluptatum animi magni eveniet maiores
            laboriosam blanditiis et quas.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet. Modi impedit, eius vero natus commodi
            facilis laudantium earum. Nulla necessitatibus dicta quo quisquam
            autem nisi, corporis rerum illo culpa voluptatum consequatur!
          </p>
        </div>
      </div>
    </section>
  );
}
