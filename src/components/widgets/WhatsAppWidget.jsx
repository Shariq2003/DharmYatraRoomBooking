import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const number = "918318382740";
  const message = "Hi! I would like to book a room.";
  const waLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50 
        w-16 h-16 sm:w-14 sm:h-14 
        bg-green-500 hover:bg-green-600 text-white 
        rounded-full shadow-lg flex items-center justify-center 
        cursor-pointer transition-all duration-300
        sm:bottom-4 sm:right-4
      "
    >
      <FaWhatsapp className="text-4xl sm:text-4xl" />
    </a>
  );
};

export default WhatsAppWidget;
