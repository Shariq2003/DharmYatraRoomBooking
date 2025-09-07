import { motion } from "framer-motion";

const services = [
  "Bike Rental",
  "Parking Area",
  "Room Booking for Stay",
  "Travel Guide",
];

const ServicesSlider = () => {
  return (
    <div className="w-full bg-transparent py-6 overflow-hidden relative">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >
        {[...services, ...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-white 
              bg-gradient-to-r from-yellow-400 to-yellow-600
              rounded-full cursor-pointer px-6 py-2
              shadow-md hover:shadow-yellow-400/50 
              transition-transform transform hover:scale-110 
              select-none"
          >
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSlider;
