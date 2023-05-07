import Image from 'next/image';
import AboutSection from './(AboutSection)';
import StatsSection from './(StatsSection)';
import CallToAction from './(CallToAction)';

export const metadata = {
  title: 'Home | Fam Müller',
  description: "Platform to tell Müller's story",
};

export default function HomePage() {
  return (
    <div className="">
      <Image
        className="mx-auto"
        src="/watermill.png"
        alt="water mill illustration"
        height={1180}
        width={1180}
        priority
      />

      <AboutSection />

      <StatsSection
        documents={80}
        medias={40}
        members={80}
        photos={365}
        users={30}
      />

      <CallToAction />
    </div>
  );
}
