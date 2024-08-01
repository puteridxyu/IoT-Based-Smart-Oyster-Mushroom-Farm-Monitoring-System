import { useAuth0 } from '@auth0/auth0-react'

import React from 'react'

function LogoutButton() {

  const {logout, isAuthenticated} = useAuth0();  
  return (
    isAuthenticated && (
      
        <a class="dropdown-item" onClick={() => logout()}>Logout</a>
    )
    
  )
}

export default LogoutButton