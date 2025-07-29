import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const mockEvents = [
  {
    id: 1,
    title: 'Opening Ceremony',
    speaker: 'Skyler Weaver',
    time: 'Nov 12th — 9:30 AM – 10:00 AM',
    location: 'Main Stage · Osaka, Japan',
    tag: 'CEREMONY',
    description: 'Welcome to Devconnect! Join us for the Opening Ceremony hosted by Skyler Weaver. This session marks the official start of the event and outlines what to expect.',
    speakerBio: 'Executive Director of the Ethereum Foundation.',
    speakerImage: 'https://via.placeholder.com/100', // Replace with real link if needed
  },
  {
    id: 2,
    title: 'Swarm Storage Deep Dive',
    speaker: 'Alex Lewenberg',
    time: 'Nov 12th — 1:00 PM – 1:30 PM',
    location: 'Talk · Room 2',
    tag: 'TECH',
  }
]

function Home() {
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('userProfile')
    if (stored) {
      setProfile(JSON.parse(stored))
    }
  }, [])

  const handleView = (event) => {
    if (event.id === 1) {
      navigate('/session', { state: { event } })
    } else {
      alert('This event is just a mock. Only Opening Ceremony is clickable in this demo.')
    }
  }

  return (
    <div>
      {/* Gradient header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

      <div className="container">
        {/* Profile Card */}
        {profile && (
          <div className="welcome-card">
            <img src={profile.picture} alt="Profile" />
            <div>
              <h2>Welcome, {profile.name}!</h2>
              <p>Connected via: {profile.bio}</p>
              <p><strong>Mood:</strong> {profile.mood}</p>
            </div>
          </div>
        )}

        {/* Notifications */}
        <section className="section">
          <h3>Notifications</h3>
          <div className="notification-card">
            <div>
              <strong>Devcon 7 is now complete</strong>
              <p>
                4 days of community, connection, and knowledge sharing. Thanks to the entire ecosystem for making this event a success.
              </p>
            </div>
            <span className="timestamp">8 months ago</span>
          </div>
        </section>

        {/* Featured Section */}
        <section className="section">
          <h3>Featured</h3>
          <div className="featured-row">
            <div className="featured-card purple">
              <h4>Ask Deva</h4>
              <p>Ask Deva anything related to Devcon.</p>
            </div>
            <div className="featured-card blue">
              <h4>Personalization</h4>
              <p>Customize your Devcon experience.</p>
            </div>
          </div>
        </section>

        {/* Schedule Highlights */}
        <section className="section">
          <div className="highlight-header">
            <h3>Schedule Highlights</h3>
            <button className="subtle-btn">Go to Schedule</button>
          </div>

          <div className="tabs-row">
            <button className="tab active">Featured</button>
            <button className="tab">Personal</button>
            <button className="tab">Recommended</button>
          </div>

          <div className="event-list">
            {mockEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-tag">{event.tag}</div>
                <h4>{event.title}</h4>
                <p>{event.time}</p>
                <p>{event.location}</p>
                <p>{event.speaker}</p>
                <button onClick={() => handleView(event)}>View</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
