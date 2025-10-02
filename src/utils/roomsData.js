// Room1 Data
import R1_img1 from "../assets/Room1/img1.jpg";
import R1_img2 from "../assets/Room1/img2.jpg";
import R1_img3 from "../assets/Room1/img3.jpg";
import R1_img4 from "../assets/Room1/img4.jpg";

// Room2 Data
import R2bg from "../assets/Room2/bg.jpg";
import R2_img1 from "../assets/Room2/img1.jpg";
import R2_img2 from "../assets/Room2/img2.jpg";
import R2_img3 from "../assets/Room2/img3.jpg";
import R2_img4 from "../assets/Room2/img4.jpg";
import R2_img5 from "../assets/Room2/img5.jpg";
import R2_vid1 from "../assets/Room2/vid1.mp4";

const rooms = [
    {
        title: "Dharma Yarta Ananda Stay",
        bgImage: "",
        description: "Comfortable and affordable accommodation with modern amenities. Perfect for budget-conscious travelers and pilgrims visiting Ayodhya.",
        email: "anandastay@stayayodhya.com",
        phone: "+91 83183 82740",
        link: "https://wa.me/918318382740?text=Hi%21%20I%27d%20like%20to%20book%20Dharma%20Yarta%20Ananda%20Stay.%20Could%20you%20please%20share%20availability%20and%20pricing%3F",
        location: [
            { description: "", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin" }
        ],
        media: [
            { type: "images", data: [{ src: R1_img1 }, { src: R1_img2 }, { src: R1_img3 }, { src: R1_img4 }] },
            { type: "videos", data: [] },
        ],
    },
    {
        title: "Asha Home Stay",
        bgImage: R2bg,
        description: "Spacious rooms with premium furnishing and enhanced comfort. Ideal for families and groups seeking a memorable stay in the holy city.",
        email: "ashahomestay@stayayodhya.com",
        phone: "+91 83183 82740",
        link: "https://wa.me/918318382740?text=Hi%21%20I%27d%20like%20to%20book%20Asha%20Home%20Stay.%20Could%20you%20please%20share%20availability%20and%20pricing%3F",
        location: [
            { 
                description: "2 km from Ram Mandir, 2 km from Ayodhya Dham Railway Station.", 
                url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin" 
            }
        ],
        media: [
            { type: "images", data: [{ src: R2_img1 }, { src: R2_img2 }, { src: R2_img3 }, { src: R2_img4 }, { src: R2_img5 }] },
            { type: "videos", data: [{ src: R2_vid1 }] },
        ],
    },
    {
        title: "Premium Room",
        bgImage: "",
        description:
            "Premium suites with luxury amenities and personalized service. Experience the finest hospitality while exploring the spiritual heart of India.",
        email: "premium@stayayodhya.com",
        phone: "+91 83183 82740",
        link: "https://wa.me/918318382740?text=Hi%21%20I%27d%20like%20to%20book%20the%20Premium%20Room.%20Could%20you%20please%20provide%20more%20details%20about%20availability%20and%20pricing%3F",
        location: [
            {
                description: "300 metres from Ram Mandir, 500 Metres from Ayodhya Dham Railway Station",
                url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56070.08143049812!2d77.1815414486328!3d28.558347100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b8aa7b6b4b%3A0xab3378453fb73175!2sShri%20Ram%20Mandir%2C%20Kailash%20Hi%C4%BAls!5e0!3m2!1sen!2sin!4v1756845641754!5m2!1sen!2sin"
            }
        ],
        media: [
            { type: "images", data: [] },
            { type: "videos", data: [] }
        ]
    }
];

export default rooms;