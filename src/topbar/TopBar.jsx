import React from 'react'
import "./topBar.css"

export default function TopBar() {
  return (
    <div className='topbar'>
        <header className="header">
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>

      {/* Profile Page Link */}
      <div className="profile-link">
        <a href="#profile">Profile</a>
      </div>
    </header>
    </div>
  )
}
