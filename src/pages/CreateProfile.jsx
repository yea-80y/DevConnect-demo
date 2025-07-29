import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProfile() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    mood: '',
    picture: null,
  })

  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfile((prev) => ({ ...prev, picture: file }))
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('✅ Profile created:', profile)
    if (profile.picture) {
      console.log('📸 Picture selected:', profile.picture.name)
    }
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify({
        ...profile,
        picture: preview
    }))
    navigate('/home')
  }

  return (
    <div className="container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Bio:</label><br />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows="3"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        {/* Mood */}
        <div style={{ marginBottom: '1rem' }}>
          <label>How are you feeling today?</label><br />
          <input
            type="text"
            name="mood"
            value={profile.mood}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        {/* Profile Picture */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Profile Picture:</label><br />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginTop: '0.5rem' }}
          />
          {preview && (
            <div style={{ marginTop: '1rem' }}>
              <img
                src={preview}
                alt="Preview"
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

        <button type="submit">Continue to App</button>
      </form>
    </div>
  )
}

export default CreateProfile
