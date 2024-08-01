import React,  { useRef, useState } from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
//import { useAuth } from '../contexts/AuthContext'
import {Link} from "react-router-dom"
import LoginButton from './LoginButton'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef() 
    const passwordConfirmRef = useRef()
    
    const [activePage, setActivePage] = useState(null) ;

    function handleActive(event) {
        if (!event.target.classList.value.includes("active")) {
        event.target.classList.toggle('active') ;
        if (activePage)
            activePage.classList.remove("active") ;
        setActivePage(event.target) ;
        }
    }  

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    <br></br>

                    <Link to="/home" className="link" onClick={handleActive}>
                        <Button  className='w-100' type="submit">
                            Log In
                        </Button>
                    </Link>
                    
                    
                </Form>

            </Card.Body>
        </Card> 
        <div className='w-100 text-center mt-2'>
            Don't have an account? Sign Up

        </div>
        
        </>
    )
}

export default Signup