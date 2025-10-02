import { useState } from "react";
import Room1bg from "../../assets/room1.jpeg";
import Room2bg from "../../assets/room2.jpeg";
import Room3bg from "../../assets/room3.jpeg";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";
import rooms from "../../utils/roomsData";
import MediaCarouselPopup from "../widgets/MediaCarouselPopup";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mediaRoom, setMediaRoom] = useState(null);

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          Our Rooms & Services
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12 text-gray-600 dark:text-gray-300">
          Choose from our carefully selected accommodation options, each designed to provide comfort and convenience during your spiritual journey in Ayodhya.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700"
            >
              <ServiceCard
                title={room.title}
                description={room.description}
                email={room.email}
                phone={room.phone}
                link={room.link}
                image={room.bgImage ? room.bgImage : Room3bg}
                mapData={room.location[0]}
                expanded={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                onOpenMedia={() => setMediaRoom(room.media)}
                className="flex flex-col h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <MediaCarouselPopup
        isOpen={!!mediaRoom}
        onClose={() => setMediaRoom(null)}
        media={mediaRoom}
      />
    </section>
  );
};

export default Services;
