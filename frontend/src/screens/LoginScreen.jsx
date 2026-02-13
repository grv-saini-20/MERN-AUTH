import React from 'react'
import {useState} from "react"
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log('submit')
    }
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className="my-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='password' className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
      <div>LoginScreen</div>
    </FormContainer>
  )
}

export default LoginScreen