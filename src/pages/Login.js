import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useAuth } from '../auth/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { Error } from '../components/Error';
import logo from "../assets/images/quizo_logo.jpeg";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const loginUser = async (values) => {
    try {
      const userObj = {
        "email": values.email,
        "password": values.password
      }
      const response = await axios.post(`http://localhost:8080/users/login`, userObj);
      login(response.data.token);
      navigate("categories")
    } catch (error) {
      console.error(error);
    }
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validate,
    onSubmit: values => {
      loginUser(values);
    },
  });

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://hips.hearstapps.com/hmg-prod/images/quiz-questions-answers-1669651278.jpg' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <img src={logo} height="70" alt="MDB Logo" loading="lazy" />
              </div>

              <h5 className="fw-normal my-2 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <form onSubmit={formik.handleSubmit} noValidate>
                <MDBRow className='mb-2 p-2'>
                  <MDBInput
                    label='Email address'
                    id='email'
                    type='email'
                    size="lg"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                  <Error show={formik.errors.email ? true : false} message={formik.errors.email} />
                </MDBRow>

                <MDBRow className='mb-4 p-2'>
                  <MDBInput
                    label='Password'
                    id='password'
                    type='password'
                    size="lg"
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                  <Error show={formik.errors.password ? true : false} message={formik.errors.password} />
                </MDBRow>

                <MDBBtn type='submit' className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              </form>

              <p className="mb-5 pb-lg-2 text-muted">Don't have an account? <Link to="/signup" className='text-black'>Register here</Link></p>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;