import AnimatedHero from '@/components/AnimatedHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollBtn';

export default function AboutUsPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero */}
      <AnimatedHero
        title="About Weekend Knocks"
        subtitle="Nurturing talent, building community, and elevating the esports experience across India."
        bgUrl="/img/page-top-bg/services-bg.jpg"
      />

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="bg-[var(--color-card-bg)] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Weekend Knocks is an Indian esports startup aiming to transform the ecosystem by discovering and
            nurturing new talent, fostering strong community connections, enhancing brand partnerships, and
            redefining league experiences.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[var(--color-card-bg)] rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">Player-Centric Environment</h3>
            <p className="text-gray-300">
              We prioritize our players, creating an environment that respects and values their contributions.
              Our programs focus on growth, wellbeing, and professional opportunities.
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-3">Talent Scouting & Development</h3>
            <p className="text-gray-300">
              Through grassroots initiatives, tournaments, and community events, we scout undiscovered talents
              and provide training, mentorship, and exposure to help them succeed on bigger stages.
            </p>
          </div>
        </section>

        <section className="mt-12 bg-[var(--color-card-bg)] rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            To build a sustainable esports ecosystem that supports players, engages fans, and offers reliable
            partnership opportunities for brands and organizers. We believe in transparent, fair competition
            and long-term career pathways for gamers.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
