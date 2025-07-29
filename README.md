# Devconnect Demo App (React + Swarm)

This is a mock Devconnect-style frontend built with React, designed to showcase how Ethereum event sessions can be presented, personalized, and discussed in a decentralized way. The interface mimics the Devcon mobile app and includes user profile creation, session detail views, and an embedded discussion board — all styled for a community-first experience.

---

## 🚀 Features

- 📱 Devcon-style mobile UI
- 👤 Create user profiles (name + profile picture, stored locally for now)
- 🏠 Home screen with event cards and schedule previews
- 📅 Session detail screens showing:
  - Speaker bio, session title, time, and location
  - Buttons like "Attend Session", "Mark as Interesting", "Join Q&A"
  - Embedded discussion board for each session
- 💬 Users can post messages using their profile
- 🧪 Mock data used for event sessions and speaker details

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/devconnect-demo.git
   cd devconnect-demo
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
Then open http://localhost:5173 in your browser.

🧪 How to Use
Start at the Landing page

Create your profile (image + name)

Enter the Home screen to view session previews

Click any session to view its detail

Post in the session’s forum — your profile is used automatically

🧠 Tech Stack
React (with Vite)

React Router

Lucide Icons

Custom CSS (mimicking Devcon’s mobile aesthetic)

LocalStorage (temporary user profile and forum state)

🔮 Future Enhancements
This app will evolve into a fully decentralized event platform.

We intend to:

Host the entire frontend app on Swarm (similar to the logic in our Swarm uploader)

Store user profiles on Swarm, using cryptographic signatures for authenticity

Enable session discussion boards to persist on Swarm, making comments decentralized and censorship-resistant

Allow the Ethereum Foundation or other hosts to deploy their event instance of the app directly to Swarm for public access via ENS (e.g. devconnect.eth)

This will enable a seamless experience where the app itself, the user data, and the interactions all live on decentralized infrastructure.

📁 Project Structure
css
Copy
Edit
src/
├── pages/
│   ├── Landing.jsx
│   ├── CreateProfile.jsx
│   ├── Home.jsx
│   └── SessionDetail.jsx
├── styles.css
├── App.jsx
├── main.jsx
└── README.md
🤝 Contributing
This is a community-first prototype. Feel free to fork it, extend it, or use it to build event tools that embrace decentralization.

📜 License
MIT

yaml
Copy
Edit

---

Let me know if you'd like a markdown file uploaded, or help deploying the app to Swarm.
