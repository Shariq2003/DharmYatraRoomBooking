import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const ServiceCard = ({ image, title, description, email, phone, link }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="mb-4 space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-600" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-600" />
            <span>{phone}</span>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition"
        >
          <FiMessageCircle className="text-lg" />
          Book via WhatsApp
        </a>
        <div className="mt-5 space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-yellow-600" />
            <span>Location</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-sm"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
