import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Card from '@/components/Card';
import logo from '@/assets/logo.png';

export default function EventsPage() {
    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text-light)]">
            <Navbar />
            <div className="container mx-auto mt-[8em] p-8">
                {/* Main Events Page Heading */}
                <h1 className="text-4xl font-bold mb-10">Events</h1>

                {/* Upcoming Events Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-extrabold mb-4 text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-2">
                        Upcoming Events
                    </h2>
                    <div className="flex flex-wrap gap-8">
                        {/* Example Cards */}
                        <Card title="Gaming Tournament" image={logo.src} link="https://example.com" />
                        <Card title="Esports Workshop" image={logo.src} link="https://example.com" />
                        <Card title="Community Meetup" image={logo.src} link="https://example.com" />
                    </div>
                </section>

                {/* Current Events Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-extrabold mb-4 text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-2">
                        Current Events
                    </h2>
                    <div className="flex flex-wrap gap-8">
                        {/* Example Cards */}
                        <Card title="Ongoing Tournament" image={logo.src} link="https://example.com" />
                        <Card title="Live Stream Event" image={logo.src} link="https://example.com" />
                    </div>
                </section>

               
            </div>
            <Footer />
        </div>
    );
}