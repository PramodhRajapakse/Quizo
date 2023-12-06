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
import "../assets/styles/Login.css";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { Error } from '../components/Error';
import logo from "../assets/images/quizo_logo.jpeg";

const Login = () => {
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <img src={logo} height="70" alt="MDB Logo" loading="lazy" />
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <form onSubmit={formik.handleSubmit} noValidate>
                <MDBRow className='mb-4 p-2'>
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

                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              </form>

              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/signup" style={{ color: '#393f81' }}>Register here</Link></p>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;