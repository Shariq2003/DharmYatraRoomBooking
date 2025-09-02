import { IoShieldCheckmark  } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About Us
        </h2>
        <p className="text-s text-center max-w-3xl mx-auto leading-relaxed">
          Welcome to <b>Dharm Yatra Room Booking</b>, your trusted partner for comfortable and affordable accommodation in the holy city of Ayodhya. We specialize in providing safe, clean, and well-maintained rooms for pilgrims, tourists, and travelers visiting this sacred destination.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
            <IoShieldCheckmark className="text-5xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
            <p className="text-gray-600">
              All our properties are verified and maintained with the highest safety standards for your peace of mind.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
            <FaHeart className="text-5xl mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-3">Affordable</h3>
            <p className="text-gray-600">
              Budget-friendly options without compromising on comfort and quality of service.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer">
            <FaRegStar className="text-5xl mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-3">Trusted</h3>
            <p className="text-gray-600">
              Highly rated by guests with excellent reviews for hospitality and service quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
