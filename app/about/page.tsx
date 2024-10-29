import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


export default function AboutUsPage() {
    return(
        <div>
        <Navbar/>

        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-100 border border-gray-300 p-8 rounded-lg shadow-lg text-center w-2000 h-48">
  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
  <p className="text-gray-700">Welcome to our platform! Here you’ll find everything you need to know about us.
  </p>
</div>

</div>

       

           
        <Footer/>
        </div>
    
    );

}
