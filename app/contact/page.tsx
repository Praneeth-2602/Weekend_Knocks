import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <main className="flex min-h-screen flex-col justify-between p-4 w-full max-w-[500px] items-center mt-40 ">
          <form>
            <div className="mb-6 ">
              <h1 className="text-3xl font-semibold mb-6 ">Contact Us</h1>
              <p >Got a technical issue? Want to send feedback about a beta feature?Need details about our Business plan? Let us know.</p>

            </div>
            <div>
              <section className="w-full">


                <div>
                  <label htmlFor="fname">Email Address:<span className="text-[#0c7d69]">*</span></label> <br />
                  <input
                    required
                    type="text"
                    id="email"
                    name="email"
                    className="border rounded-lg w-full p-2"
                    placeholder="Your Email"
                  />{" "}
                  <br /> <br />
                </div>
                <div>
                  <label htmlFor="subject">Subject:<span className="text-[#0c7d69]">*</span></label> <br />
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    className="border rounded-lg w-full p-2"
                    placeholder="Let us know how we can help you"
                  />{" "}
                  <br /> <br />
                </div>
              </section>
              <section>


                <label htmlFor="fname">Your Message:<span className="text-[#0c7d69]">*</span></label> <br />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Leave a comment..."
                  className="border w-full p-2 rounded-lg"
                  required
                ></textarea>
                <br /> <br />
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    placeholder="title"
                    required
                  />
                  <br />
                  <label htmlFor="consent">
                    I consent to being contacted by the team<span className="text-[#0c7d69]">*</span>
                  </label>
                </div>
                <br />
              </section>
            </div>
            <input
              className="bg-[#0c7d69] w-full p-2 rounded-lg text-white"
              type="submit"
              value="Submit"
              required
            />
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}