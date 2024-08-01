import React from 'react'
import {Container}  from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from '../profile/Profile';
import Signup from './Signup';
//import { AuthProvider } from '../../componets/contexts/AuthContext'

function Login() {
  const {loginWithRedirect, logout, user, isloading} = useAuth0();
  return (
   
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh"}}
      >
        <main className='w-100' style={{ maxWidth: "400px"}}>
          <Signup />
         
          
            

        </main>
      </Container>
   
  )
}

export default Login