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
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="relative flex items-center justify-center text-lg md:text-xl font-bold 
              bg-clip-text text-transparent rounded-full cursor-pointer px-6 py-2
              shadow-md hover:shadow-yellow-400/50 transition-transform transform hover:scale-110 select-none"
          >
            <span className="absolute inset-0 bg-black/30 rounded-full z-0"></span>
            <span className="relative z-10 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {service}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSlider;
