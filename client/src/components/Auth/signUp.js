import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const SignUp = props => {
  const { onChange, onSubmit, showSignIn } = props;

  return (
    <div className="col-12">
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="input"
            placeholder="Email"
            name="email"
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            This site uses Gavatar, if you would like a profile image, please
            use a Gravatar email
          </Form.Text>
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
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control
                as="input"
                name="firstName"
                onChange={onChange}
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                as="input"
                name="lastName"
                onChange={onChange}
                placeholder="Last name"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control
                as="input"
                name="city"
                onChange={onChange}
                placeholder="City"
              />
            </Col>
            <Col>
              <Form.Control
                as="input"
                name="state"
                onChange={onChange}
                placeholder="State"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Button onClick={onSubmit} variant="secondary">
          Submit
        </Button>
      </Form>
      <div className="p-5">
        <p>Already have an account? </p>
        <button className="" onClick={showSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
