<div align="center">

# 🛕 Dharm Yatra Room Booking

**Book comfortable & affordable rooms in Ayodhya — a fast, animated, mobile-friendly booking site for pilgrims and travellers, with one-tap WhatsApp enquiries.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-dharm--yatra--room--booking.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://dharm-yatra-room-booking.vercel.app)

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/Shariq2003/DharmYatraRoomBooking?style=flat-square)

[Features](#-features) · [User Flow](#-user-flow) · [Getting Started](#-getting-started) · [Customise Rooms](#%EF%B8%8F-adding-or-editing-rooms) · [Structure](#-project-structure)

</div>

---

## ✨ Features

| | Feature | Details |
|---|---|---|
| 🏨 | **Room & stay cards** | Each property shows a description, contact details and an expandable section |
| 🖼️ | **Media gallery popup** | Full-screen carousel mixing photos **and videos** of each room |
| 📍 | **Embedded Google Maps** | See exactly where every stay is located |
| 💬 | **WhatsApp booking** | Pre-filled WhatsApp message per room + a floating WhatsApp widget on every page |
| ✨ | **Smooth animations** | Hero and section reveals powered by Framer Motion |
| 📱 | **Responsive & dark-mode ready** | Tailwind CSS v4 with `dark:` variants throughout |
| 🧭 | **Multi-page** | Home (Hero · Services · About · Contact) and a dedicated About page |

## 🧭 User Flow

```mermaid
flowchart LR
    A(["Visitor lands on Hero"]) --> B["Book Now ↓"]
    B --> C["Browse room cards"]
    C --> D["Open media gallery<br/>photos & videos"]
    C --> E["View location<br/>Google Maps"]
    D --> F{"Like it?"}
    E --> F
    F -- "Yes" --> G["💬 Enquire on WhatsApp<br/>(pre-filled message)"]
    F -- "Not yet" --> C
```

## 🚀 Getting Started

```bash
git clone https://github.com/Shariq2003/DharmYatraRoomBooking.git
cd DharmYatraRoomBooking
npm install
npm run dev          # http://localhost:5173
```

<details>
<summary><b>📜 Available scripts</b></summary>

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

</details>

## 🛠️ Adding or editing rooms

All room content lives in a single file — **[`src/utils/roomsData.js`](src/utils/roomsData.js)**. Each entry looks like:

<details>
<summary><b>Show room object shape</b></summary>

```js
{
  title: "Room name",
  bgImage: RoomBg,                                 // optional card background
  description: "Short pitch shown on the card",
  email: "bookings@example.com",
  phone: "+91 XXXXX XXXXX",
  link: "https://wa.me/91XXXXXXXXXX?text=...",     // WhatsApp deep link
  location: [
    { description: "2 km from …", url: "https://www.google.com/maps/embed?pb=..." },
  ],
  media: [
    { type: "images", data: [{ src: Img1 }, { src: Img2 }] },
    { type: "videos", data: [{ src: Video1 }] },
  ],
}
```

Drop the images/videos into `src/assets/<RoomName>/`, import them at the top of `roomsData.js`, and the new card appears automatically.

</details>

## 📁 Project Structure

<details>
<summary><b>Expand tree</b></summary>

```text
src/
├── components/
│   ├── sections/          # Hero, Services, AboutUs, ContactUs
│   ├── widgets/           # MediaCarouselPopup, WhatsAppWidget
│   ├── ServiceCard.jsx    # one room card
│   ├── ServicesSlider.jsx
│   ├── Header.jsx · Footer.jsx
├── pages/                 # Home, About
├── utils/roomsData.js     # ← all room content
└── assets/                # room photos & videos
```

</details>

---

<div align="center">

Built by **[Shariq](https://github.com/Shariq2003)** · [LinkedIn](https://www.linkedin.com/in/shariq-sd)

⭐ If you like this project, consider giving it a star!

</div>
