import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Card from '@/components/Card';
import logo from '@/assets/logo.png';

export default function OurWorkPage() {

    const pastEvents = [
        {
            id: 1,
            title: "WeekendKnocks Season 1",
            image: logo.src,
            isCurrentEvent: false,
            isPast: true
        }
    ];

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center min-h-screen'>
                <div className="container mx-auto mt-[1em] p-8">
                    {/* Main Events Page Heading */}
                    <h1 className="text-4xl font-bold mb-10">Our Journey</h1>

                    {/* Upcoming Events Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-extrabold mb-4 text-[var(--color-primary)] border-b-4 border-[var(--color-primary)] pb-2">
                            Our Past Events
                        </h2>
                        <div className="flex flex-wrap gap-8">
                            {/* Example Cards */}
                            {pastEvents.map((event, i) => {
                                return (
                                    <Card
                                        key={i}
                                        image={event.image}
                                        title={event.title}
                                        link={`/events/${event.id}/view`}
                                        isCurrentEvent={event.isCurrentEvent}
                                        isPast={event.isPast}
                                    />
                                );
                            })}

                        </div>
                    </section>
                </div>

            </div>
            <Footer />
        </div>

    );

}
