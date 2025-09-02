import Room1bg from "../../assets/room1.jpeg";
import Room2bg from "../../assets/room2.jpeg";
import Room3bg from "../../assets/room3.jpeg";
import ServiceCard from "../ServiceCard";

const Services = () => {
  const rooms = [
    {
      image: Room1bg,
      title: "Standard Room",
      description:
        "Comfortable and affordable accommodation with modern amenities. Perfect for budget-conscious travelers and pilgrims visiting Ayodhya.",
      email: "standard@stayayodhya.com",
      phone: "+91 98765 43210",
      link: "https://api.whatsapp.com/send/?phone=919876543210&text=Hi%21+I%27d+like+to+book+the+Standard+Room.+Could+you+please+provide+more+details+about+availability+and+pricing%3F&type=phone_number&app_absent=0"
    },
    {
      image: Room2bg,
      title: "Deluxe Room",
      description:
        "Spacious rooms with premium furnishing and enhanced comfort. Ideal for families and groups seeking a memorable stay in the holy city.",
      email: "deluxe@stayayodhya.com",
      phone: "+91 98765 43211",
      link: "https://api.whatsapp.com/send/?phone=919876543211&text=Hi%21+I%27d+like+to+book+the+Deluxe+Room.+Could+you+please+provide+more+details+about+availability+and+pricing%3F&type=phone_number&app_absent=0"
    },
    {
      image: Room3bg,
      title: "Premium Room",
      description:
        "Premium suites with luxury amenities and personalized service. Experience the finest hospitality while exploring the spiritual heart of India.",
      email: "premium@stayayodhya.com",
      phone: "+91 98765 43212",
      link: "https://api.whatsapp.com/send/?phone=919876543212&text=Hi%21+I%27d+like+to+book+the+Premium+Room.+Could+you+please+provide+more+details+about+availability+and+pricing%3F&type=phone_number&app_absent=0"
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Rooms & Services
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed mb-12 text-gray-600">
          Choose from our carefully selected accommodation options, each designed
          to provide comfort and convenience during your spiritual journey in
          Ayodhya.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <ServiceCard key={index} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
