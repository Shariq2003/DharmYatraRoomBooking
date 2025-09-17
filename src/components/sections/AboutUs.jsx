import { IoShieldCheckmark } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const AboutUs = () => {
  const features = [
    {
      icon: <IoShieldCheckmark className="text-5xl mx-auto mb-4 text-blue-500" />,
      title: "Safe & Secure",
      description:
        "All our properties are verified and maintained with the highest safety standards for your peace of mind.",
    },
    {
      icon: <FaHeart className="text-5xl mx-auto mb-4 text-red-500" />,
      title: "Affordable",
      description:
        "Budget-friendly options without compromising on comfort and quality of service.",
    },
    {
      icon: <FaRegStar className="text-5xl mx-auto mb-4 text-yellow-500" />,
      title: "Trusted",
      description:
        "Highly rated by guests with excellent reviews for hospitality and service quality.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-sm md:text-base text-center max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
          Welcome to <b>Dharm Yatra Room Booking</b>, your trusted partner for comfortable and affordable accommodation in the holy city of Ayodhya. We specialize in providing safe, clean, and well-maintained rooms for pilgrims, tourists, and travelers visiting this sacred destination.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl p-6 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {feature.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
