import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="container">
      <h1>Welcome to the Devconnect Demo App</h1>
      <p>
        This is a mock interface showcasing how the Ethereum Foundation could host its Devconnect event app on Swarm. You can create a profile and explore event content, message boards, and more.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/create-profile">
          <button>Create Your Profile</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
