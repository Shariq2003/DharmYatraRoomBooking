import bgHero from "../../assets/bg-hero2.jpg";
import ServicesSlider from "../ServicesSlider";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${bgHero})`, backgroundPosition: "center 70%" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="absolute top-0 w-full">
        <ServicesSlider />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-white bg-clip-text text-transparent">
          Dharm Yatra Room Booking
        </h1>
        <p className="text-lg md:text-xl mb-6 font-semibold max-w-2xl mx-auto text-white/90">
          Book Comfortable & Affordable Rooms Online in Ayodhya
        </p>
        <a
          href="#services"
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
