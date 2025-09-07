import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const ServiceCard = ({ image, title, description, email, phone, link, mapSrc, expanded, onToggle }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition self-start">
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

          <button
            onClick={onToggle}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            {expanded ? "Hide Map" : "Show Directions"}
          </button>

          <div className={`transition-all duration-500 overflow-hidden ${expanded ? "max-h-[260px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <iframe
              src={mapSrc}
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
