import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import "../assets/styles/Register.css";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { Error } from '../components/Error';
import logo from '../assets/images/quizo_logo.jpeg';


const Register = () => {

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'The passwords do not match';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
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

              <form onSubmit={formik.handleSubmit} noValidate>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create new account</h5>
                <MDBRow className='mb-4'>
                  <MDBCol md='6'>
                    <MDBInput
                      label='First Name'
                      id='firstName'
                      type='text'
                      size="lg"
                      onChange={formik.handleChange}
                      value={formik.values.firstName} />
                    <Error show={formik.errors.firstName ? true : false} message={formik.errors.firstName} />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      label='Last Name'
                      id='lastName'
                      type='text'
                      size="lg"
                      onChange={formik.handleChange}
                      value={formik.values.lastName} />
                    <Error show={formik.errors.lastName ? true : false} message={formik.errors.lastName} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className='mb-4 p-2'>
                  <MDBInput
                    label='Email address'
                    id='email'
                    type='email' size="lg"
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
                <MDBRow className='mb-4 p-2'>
                  <MDBInput
                    label='Confirm Password'
                    id='confirmPassword'
                    type='password'
                    size="lg"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword} />
                  <Error show={formik.errors.confirmPassword ? true : false} message={formik.errors.confirmPassword} />
                </MDBRow>
                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Have an account already? <Link to="/" style={{ color: '#393f81' }}>Login here</Link></p>
              </form>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer >
  );
}

export default Register;