import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


export default function EventsPage() {
    return(
        <div>
        <Navbar/>
        <div className='flex justify-center items-center min-h-screen'>
            <h1>Upcoming Events</h1>
            </div>
            <Footer/>
    </div>
    
    );

}
