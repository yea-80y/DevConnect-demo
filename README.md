# Devconnect Demo App (React + Swarm)

This is a mock **Devconnect-style frontend** built with React, designed to showcase how Ethereum event sessions can be presented, personalized, and discussed in a decentralized way. It mimics the Devcon mobile app and includes user profile creation, session detail views, and an embedded discussion board.

---

## 🚀 Features

- 📱 Devcon-style mobile UI
- 👤 Create profile (name + profile picture, stored locally)
- 🏠 Home screen with event cards
- 📅 Session detail screen with:
  - Title, time, location, speaker bio
  - Buttons: "Attend", "Export", "Join Q&A", etc.
- 💬 Embedded message board per session
- 🔧 Mock event data (local only)

---

## 🛠️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/devconnect-demo.git
cd devconnect-demo
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the app
bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

🧪 Usage
Start on the Landing screen.

Click Create Your Profile to set a name + profile picture.

Enter the Home screen to see session previews.

Click any session to view its full detail.

Post a message in the Event Forum — your profile is used automatically.

🧠 Tech Stack
React (Vite)

React Router

Lucide Icons

CSS (custom + utility styles)

LocalStorage (temporary storage for profile + messages)

🔮 Future Enhancements
This prototype is the first step toward a fully decentralized event app. Future iterations will evolve to leverage Swarm as the primary storage and interaction layer.

We plan to offer:

Decentralized user profiles, backed by cryptographic signatures and stored on Swarm

Swarm-hosted forums where users can post using their decentralized identity

Persistent session content and app hosting directly on Swarm

Together, these changes will make the Devconnect app itself — and all interactions within it — entirely distributed and user-owned.

📦 Folder Structure
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
✅ Contributing
This is a community-led prototype — fork it, extend it, or use it as inspiration for building decentralized apps on Swarm.

📜 License
MIT

yaml
Copy
Edit

---

Let me know if you'd like a markdown `.md` file download, or for me to help commit this directly into your project repo.