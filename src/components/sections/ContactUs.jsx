import { FaEnvelope, FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info + Form */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-indigo-600 text-xl" />
                <p>123 Main Street, New Delhi, India</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-indigo-600 text-xl" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <p>support@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-indigo-600 text-xl" />
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              ></textarea>
              <div className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md w-full text-center cursor-pointer">
                <a
                    href="#"
                >
                    Send Message
                </a>
              </div>
            </form>
          </div>

          <div className="h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
