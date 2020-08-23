import React, { useCallback } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import './Pages.css';

const Contact = () => {
  const formSubmit = useCallback((e) => {
    e.preventDefault()
  })
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1>Contact with JSONS Web Dev</h1>
            <small>Let us know what kind of support you want</small>
          </div>
          <div className="col-6 mx-auto" id="form">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" required />
                  <Form.Text className="text-muted">
                    Please Enter your full name
                  </Form.Text>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label>Your Business</Form.Label>
                  <Form.Control type="text" placeholder="Describe your business" required />
                  <Form.Text className="text-muted">
                    We will provide our service based on type of business you have
                  </Form.Text>
                </Col>
              </Form.Row>
              <Button variant="primary" type="submit" onClick={formSubmit}>
                Send Feedback
                </Button>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
