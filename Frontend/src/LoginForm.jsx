import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LogForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Login successful!');
        console.log("Login response:", result);

        // Redirect to home or dashboard
        navigate('/order-summary');
      } else {
        if (result.message.includes('Invalid email')) {
          setError('email', { type: 'manual', message: 'Email not found' });
        } else if (result.message.includes('Invalid password')) {
          setError('password', { type: 'manual', message: 'Incorrect password' });
        } else {
          alert(result.message || 'Login failed');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Network error. Please check your server.');
    }
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '50px' }} className="login-container">
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Row className="mb-3">
          <Col>
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email is required" })} className="form-control" />
            <small className="text-danger">{errors.email && errors.email.message}</small>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <label>Password</label>
            <input type="password" {...register("password", { required: "Password is required" })} className="form-control" />
            <small className="text-danger">{errors.password && errors.password.message}</small>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </Col>
        </Row>
        <Row className="mt-3">
      <Col className="text-center">
      <p>
      New customer? <Link to="/register">Register here</Link>
    </p>
     </Col>
    </Row>

      </form>
    </Container>
  );
};

export default LogForm;
