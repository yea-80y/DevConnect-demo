import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Share2, CalendarDays, Star } from "lucide-react"
import "../styles.css"

// Mock event data (still static)
const mockEvent = {
  title: "Opening Ceremony",
  description: "Welcome to Devconnect! Join us for the Opening Ceremony hosted by Skyler Weaver. This session marks the official start of the event and outlines what to expect.",
  time: "Nov 12th — 9:30 AM – 10:00 AM",
  location: "Main Stage · Osaka, Japan",
  speaker: "Skyler Weaver",
  speakerBio: "Executive Director of the Ethereum Foundation.",
  speakerImage: "https://i.imgur.com/Zi6v09f.png"
}

export default function SessionDetail() {
  const navigate = useNavigate()

  const [profile, setProfile] = useState(null)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("userProfile")
    if (stored) {
      setProfile(JSON.parse(stored))
    }
  }, [])

  const handlePost = (e) => {
    e.preventDefault()
    if (!message.trim() || !profile) return

    setMessages([...messages, {
      name: profile.name,
      text: message,
      picture: profile.picture
    }])
    setMessage("")
  }

  return (
    <div className="screen">
      {/* Header */}
      <div className="header">
        <button onClick={() => navigate("/home")} className="back-button">
          <ArrowLeft size={24} />
        </button>
        <h2>{mockEvent.title}</h2>
        <div className="header-icons">
          <Share2 size={20} />
          <CalendarDays size={20} />
          <Star size={20} />
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <p className="video-label">Video Recording</p>
        <div className="video-thumbnail">Watch on YouTube</div>
      </div>

      {/* Session Info */}
      <div className="session-content">
        <h3>{mockEvent.title}</h3>
        <p className="session-description">{mockEvent.description}</p>
        <p className="session-meta">
          {mockEvent.time}<br />
          {mockEvent.location}
        </p>

        <div className="session-actions">
          <button>Attend Session</button>
          <button>Mark as Interesting</button>
          <button>Export to Calendar</button>
          <button>Find Location</button>
        </div>

        <div className="prompt-box">Tell me about similar sessions</div>

        {/* Speaker Section */}
        <div className="speakers">
          <p className="section-title">Speakers</p>
          <div className="speaker-card">
            <img
              src={mockEvent.speakerImage}
              alt={mockEvent.speaker}
              className="speaker-image"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "1rem"
              }}
            />
            <div className="speaker-info">
              <p>{mockEvent.speaker}</p>
              <p className="speaker-handle">@{mockEvent.speaker.split(" ")[0].toLowerCase()}</p>
              <p className="speaker-bio">{mockEvent.speakerBio}</p>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div className="event-forum">
          <p className="section-title">Event Forum</p>
        </div>

        {/* 🧵 Embedded Message Board */}
        <div className="message-board">
          <p className="section-title">Discussion</p>
          <form onSubmit={handlePost} className="message-form">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>

          <div className="message-list">
            {messages.map((msg, idx) => (
              <div key={idx} className="message">
                <img
                  src={msg.picture}
                  alt={msg.name}
                  className="message-avatar"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "0.5rem"
                  }}
                />
                <strong>{msg.name}:</strong> {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="bottom-buttons">
          <button>General Forum</button>
          <button>Join Live Q&A</button>
        </div>
      </div>
    </div>
  )
}
