import Hero from "../components/sections/Hero"
import AboutUs from "../components/sections/AboutUs"
import Services from "../components/sections/Services"
import ContactUs from "../components/sections/ContactUs"

const Home = () => {
  return (
    <div className="font-sans">
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  )
}
    
export default Home
