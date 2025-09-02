const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-700 text-center py-8 text-white">
      <h2 className="text-lg font-bold">Dharm Yatra Room Booking</h2>
      <p className="text-sm mb-4">Your Spiritual Journey Starts with Comfortable Stay</p>
      <hr className="border-blue-500 w-3/4 mx-auto mb-4" />
      <p className="text-sm">
        © {new Date().getFullYear()} Dharm Yatra Room Booking | Powered by Techie Vibe Pvt. Ltd.
      </p>
      <p className="text-sm font-semibold text-yellow-400 mt-2">
        "Your Vibe, Our Technology"
      </p>
    </footer>
  );
};

export default Footer;
