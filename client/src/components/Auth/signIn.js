import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignIn = props => {
  const { onChange, onSubmit, showSignUp } = props;

  return (
    <div>
      <Form className="mt-5">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="input"
            placeholder="Email"
            name="email"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
        </Form.Group>
        <Button onClick={onSubmit} variant="secondary">
          Submit
        </Button>
      </Form>
      <div className="p-5">
        <p>Don't have an account? </p>
        <button className="" onClick={showSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
