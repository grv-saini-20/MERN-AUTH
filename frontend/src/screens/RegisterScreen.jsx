import React from 'react'
import {useState} from "react"
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log('submit')
    }
  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name' className="my-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='email' className="my-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='password' className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='confirmPassword' className="my-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
        <Row className="py-3">
          <Col>
            Already have an account? <Link to='/login'>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default RegisterScreen