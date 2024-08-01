import { useAuth0 } from '@auth0/auth0-react'

import React, { useReducer } from 'react'

function Profile2() {

  const {user, isAuthenticated} = useAuth0();  
  return (
    isAuthenticated && (
        <article className='column'>
            {JSON.stringify(user)}
        </article>
    )
  )
}

export default LoginButton