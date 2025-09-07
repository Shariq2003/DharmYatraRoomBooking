import bgHero from "../../assets/bg-hero2.jpg";
import ServicesSlider from "../ServicesSlider";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${bgHero})`,backgroundPosition: "center 70%" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-0 w-full">
        <ServicesSlider />
      </div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Dharm Yatra Room Booking
        </h1>
        <p className="text-lg md:text-xl mb-6 font-bold max-w-2xl mx-auto">
          Book Comfortable & Affordable Rooms Online in Ayodhya
        </p>
        <a
          href="#services"
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full cursor-pointer shadow-md w-[150px]"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
