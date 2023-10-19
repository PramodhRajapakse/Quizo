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

const Register = () => {
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
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create new account</h5>
              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='First Name' id='formControlLg' type='email' size="lg" />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Last Name' id='formControlLg' type='email' size="lg" />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLg' type='password' size="lg" />

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Have an account already? <Link to="/" style={{ color: '#393f81' }}>Login here</Link></p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;