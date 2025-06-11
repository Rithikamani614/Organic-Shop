
import React from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset, setError } = useForm();
  
  // Initialize useNavigate hook
  const navigate = useNavigate(); 

  const handleRegistration = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', responseData);
        alert('Form submitted successfully!');
        reset(); // Clear the form after success

        // Navigate to the login page after successful registration
        navigate('/login');  // Assuming you have a route for '/login'
      } else {
        console.error('Form submission failed:', responseData);

        const msg = responseData.message || 'Failed to submit form';

        // 👉 Handle specific error messages from the backend
        if (msg.includes('Both')) {
          setError('email', {
            type: 'manual',
            message: 'Email already exists'
          });
          setError('number', {
            type: 'manual',
            message: 'Mobile number already exists'
          });
        } else if (msg.includes('Email')) {
          setError('email', {
            type: 'manual',
            message: 'Email already exists'
          });
        } else if (msg.includes('Mobile')) {
          setError('number', {
            type: 'manual',
            message: 'Mobile number already exists'
          });
        } else {
          alert(msg); // fallback alert if no specific error
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your backend server.');
    }
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  const registerOptions = {
    firstname: { required: "First Name is required" },
    lastname: { required: "Last Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    confirmPassword: {
      validate: (value) =>
        value === watch('password') || "Passwords do not match"
    },
    number: {
      required: "Mobile number is required",
      minLength: {
        value: 10,
        message: "Mobile number must be exactly 10 digits"
      },
      maxLength: {
        value: 10,
        message: "Mobile number must be exactly 10 digits"
      },
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Mobile number must contain only digits"
      }
    },
    address: { required: "Address is required" },
    pincode: {
      required: "Pincode is required",
      minLength: {
        value: 6,
        message: "Pincode must have exactly 6 digits"
      },
      maxLength: {
        value: 6,
        message: "Pincode must have exactly 6 digits"
      }
    },
    country: { required: "Country is required" },
    gender: { required: "Gender is required" },
    languages: { required: "Please select at least one language" },
    city: { required: "City is required" }
  };

  const countries = ["India", "Australia", "Germany", "Canada", "Japan"];
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Hyderabad"];

  return (
    <div className="div">
      <h2 className="mt-5">Registration Form</h2>
      <Container>
        <form onSubmit={handleSubmit(handleRegistration, handleError)} className="for">
          <Row>
            <Col><label>First Name</label></Col>
            <Col><label>Last Name</label></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input type="text" {...register('firstname', registerOptions.firstname)} />
              <small className="text-danger">{errors?.firstname && errors.firstname.message}</small>
            </Col>
            <Col>
              <input type="text" {...register('lastname', registerOptions.lastname)} />
              <small className="text-danger">{errors?.lastname && errors.lastname.message}</small>
            </Col>
          </Row>

          <Row>
            <Col><label>Email</label></Col>
            <Col><label>Mobile Number</label></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input type="email" {...register('email', registerOptions.email)} />
              <small className="text-danger">{errors?.email && errors.email.message}</small>
            </Col>
            <Col>
              <input type="number" {...register('number', registerOptions.number)} />
              <small className="text-danger">{errors?.number && errors.number.message}</small>
            </Col>
          </Row>

          <Row>
            <Col><label>Password</label></Col>
            <Col><label>Confirm Password</label></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input type="password" {...register('password', registerOptions.password)} />
              <small className="text-danger">{errors?.password && errors.password.message}</small>
            </Col>
            <Col>
              <input type="password" {...register('confirmPassword', registerOptions.confirmPassword)} />
              <small className="text-danger">{errors?.confirmPassword && errors.confirmPassword.message}</small>
            </Col>
          </Row>

          <Row>
            <Col><label>Select Country</label></Col>
            <Col><label>Select City</label></Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <select {...register('country', registerOptions.country)} className="city">
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <small className="text-danger">{errors?.country && errors.country.message}</small>
            </Col>
            <Col>
              <select {...register('city', registerOptions.city)} className="city">
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
              <small className="text-danger">{errors?.city && errors.city.message}</small>
            </Col>
          </Row>

          <Row>
            <Col><label>Select Gender</label></Col>
            <Col><label>Address</label></Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <input type="radio" id="male" value="Male" {...register('gender', registerOptions.gender)} style={{ width: '4%', marginLeft: '10px' }} />
              <label htmlFor="male" style={{ marginLeft: '10px' }}>Male</label>
              <input type="radio" id="female" value="Female" {...register('gender', registerOptions.gender)} style={{ width: '4%', marginLeft: '10px' }} />
              <label htmlFor="female" style={{ marginLeft: '10px' }}>Female</label>
              <input type="radio" id="other" value="Other" {...register('gender', registerOptions.gender)} style={{ width: '4%', marginLeft: '10px' }} />
              <label htmlFor="other" style={{ marginLeft: '10px' }}>Other</label>
              <br />
              <small className="text-danger">{errors?.gender && errors.gender.message}</small>
            </Col>
            <Col>
              <textarea {...register('address', registerOptions.address)} style={{ width: '100%', marginTop: '10px' }} />
              <small className="text-danger">{errors?.address && errors.address.message}</small>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <button type="submit" className="submit-btn">Submit</button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default RegisterForm;
