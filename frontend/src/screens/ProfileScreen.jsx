import React from 'react';
import {Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { toast } from 'react-toastify';
import { setCredentials } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useUpdateProfileMutation } from '../slices/usersApiSlice';

const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
    }, [userInfo.setName, userInfo.setEmail]);

    const submitHandler = async(e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await updateProfile({ id: userInfo._id, name, email, password }).unwrap();
                toast.success('Profile updated successfully');
                dispatch(setCredentials({ ...res.data }));
                navigate('/profile');
                toast.success('Profile updated successfully');
            } catch (error) {
                toast.error(error?.message || 'Profile update failed');
            }
        }
    }
  return (
    <FormContainer>
        <h1>Update Profile</h1>
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

        {isLoading && <Loader />}

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen