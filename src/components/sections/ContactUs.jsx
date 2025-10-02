import { FaEnvelope, FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-md p-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-yellow-400 text-xl" />
                <p>123 Main Street, New Delhi, India</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400 text-xl" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400 text-xl" />
                <p>support@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-yellow-400 text-xl" />
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <form className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-md p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-[595px] w-full rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
