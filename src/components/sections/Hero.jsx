import bgHero from "../../assets/bg-hero.jpg"
const Hero = () => {
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Dharm Yatra Room Booking
        </h1>
        <p className="text-lg md:text-xl mb-6 font-bold max-w-2xl mx-auto">
          Book Comfortable & Affordable Rooms Online in Ayodhya
        </p>
        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full cursor-pointer shadow-md w-[150px]">
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Hero
