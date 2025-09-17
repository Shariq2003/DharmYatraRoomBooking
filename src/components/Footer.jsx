import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-center py-5 px-6 border-t-5 border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
        Dharm Yatra Room Booking
      </h2>
      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-2 mb-6">
        Your Spiritual Journey Starts with Comfortable Stay
      </p>

      <hr className="border-gray-300 dark:border-gray-600 w-3/4 mx-auto mb-6" />

      <div className="flex justify-center gap-6 mb-2">
        {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition-colors text-xl"
          >
            <Icon />
          </a>
        ))}
      </div>

      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Dharm Yatra Room Booking | Powered by Techie Vibe Pvt. Ltd.
      </p>
      <p className="text-sm md:text-base font-semibold text-yellow-400 mt-1">
        "Your Vibe, Our Technology"
      </p>
    </footer>
  );
};

export default Footer;
