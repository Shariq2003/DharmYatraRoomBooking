import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import Room3bg from "../assets/room3.jpeg";
import { MdOutlineTravelExplore } from "react-icons/md";

const ServiceCard = ({ image, title, description, email, phone, link, mapData, expanded, onToggle, onOpenMedia }) => {
  return (
    <motion.div
      className="service-card-mobile bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer flex flex-col min-h-[650px]"
      whileHover={{ scale: 1.03 }}
    >
    <div className="relative w-full h-52 rounded-t-2xl overflow-hidden cursor-pointer" onClick={() => onOpenMedia()}>
      <img
        src={image !== "" ? image : Room3bg}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
        Show More Media
      </div>
    </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base flex-1">
          {description}
        </p>

        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>{phone}</span>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
        >
          <FiMessageCircle className="text-lg" />
          Book via WhatsApp
        </a>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
            <FaLocationDot className="text-yellow-400" />
            <span>Location</span>
          </div>

          <button
            onClick={onToggle}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mb-4"
          >
            {expanded ? "Hide Map" : "Show Directions"}
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg text-sm md:hidden justify-center px-4 py-2 w-full font-semibold transition-all duration-300 flex items-center gap-2"
            onClick={() => {
              onOpenMedia();
            }}
          >
            View Media
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 220 }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-3 rounded-xl shadow-sm mb-4"
              >
              {mapData.description != "" && (<div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm my-2">
                <MdOutlineTravelExplore className="text-green-500" size={34}/>
                <span>{mapData.description}</span>
              </div>)}
                <iframe
                  src={mapData.url}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
