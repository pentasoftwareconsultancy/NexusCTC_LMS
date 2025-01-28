import React from 'react'
import {Link} from 'react-router-dom'
import NotLoggedIn from '../components/notloggedin/NotLoggedIn'

function NotLoggedInPage() {
  return (
    <div>

      <NotLoggedIn/>
      <h2>You are not logged in</h2>
      <p>Please <Link to="/login">login</Link> to access the course details.</p>
    </div>
  )
}

export default NotLoggedInPage
