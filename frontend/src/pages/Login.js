import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import login from '../components/images/login.jpg';
import swal from 'sweetalert';

import { GoogleLogin } from 'react-google-login';
import {
  Container,
  Row,
  Col,
  Form,
  Grid,
  Button,
  InputGroup,
  Modal,
} from 'react-bootstrap';

const clientId =
  '790433585929-p9slfbpl44uau7urp5tu91b5h5trl21j.apps.googleusercontent.com';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [textInputErrorMessageEmail, setTextInputErrorMessageEmail] =
    useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);

      e.preventDefault();
      try {
        const response = await axios.post(
          'http://localhost:4000/api/authentication/login',
          {
            email: email,
            password: password,
          }
        );
        console.log(response.data, 'Login Success');
        if (response.data) {
          setOpen(true);
          localStorage.setItem('token', response.data.token);
          setEmail('');
          setPassword('');
          navigate('/AdminDashboard');
          window.location.reload();
        }
      } catch (error) {
        swal('Invalid Credential!', '', 'error'); // Show success message
        setEmail('');
        setPassword('');
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileobj);
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <Container>
      <div className='login__customer__container '>
        <Row container spacing={2}>
          {/* Left side with register customer image */}
          <Col item xs={12} md={6}>
            <div className='login__customer__img'>
              <img src={login}></img>
            </div>
          </Col>

          {/* Right side with form components */}
          <Col item xs={12} md={6}>
            <h2 className='login__customer__heading'> Customer Login </h2>

            {/* Form */}
            <div className='login__customer__form'>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleLogin}
                className='text-left'
              >
                <Row className=' pb-2'>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label className='d-flex justify-content-start'>
                      Email
                    </Form.Label>
                    <Form.Control
                      type='email'
                      pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                      placeholder='Enter Email'
                      required
                      value={email}
                      width={100}
                      onChange={(e) => setEmail(e.target.value)}
                    />{' '}
                    <Form.Control.Feedback type='invalid'>
                      *Please enter a valid E-mail
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className=' pb-2'>
                  <Form.Group as={Col} controlId='formGridpassword'>
                    <Form.Label className='d-flex justify-content-start'>
                      Password
                    </Form.Label>
                    <Form.Control
                      type='password'
                      required
                      minLength={6}
                      maxLength={20}
                      value={password}
                      width={100}
                      placeholder='Enter Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter valid password above 6 characters
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <div class='container d-flex justify-content-center'>
                  <Button
                    variant='primary'
                    type='submit'
                    className=' mt-2 justify-content-center'
                  >
                    LOGIN
                  </Button>
                </div>
                <div className='login__customer__form__line'>
                  <div className='forgot__password'>
                    <p>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                    </p>
                  </div>
                  {/* Remember Me */}
                  <div className='remember__me'>
                    <input type='checkbox' />
                    <span> Remember me</span>
                  </div>
                </div>
                <div className='social__icons__topic' id='signInDutton'>
                  <p> or Sign Up Using</p>

                  {/* Google Signup Button */}
                  <GoogleLogin
                    className='google__login'
                    clientId={clientId}
                    buttonText='Sign in with Google'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                </div>

                {/* Already have an account */}
                <div className='already__have__an__account'>
                  <p>
                  Don't have an account? <Link to="/signup">Create</Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
