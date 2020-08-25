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
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Joe" id="firstName" name="fname" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Lee" id="lastName" name="lname" />
              </div>
              <div class="col-12">
                <label htmlFor="email" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="j.lee@email.com" id="email" name="email" />
              </div>
              <div class="col-12">
                <label htmlFor="phonenumber" class="form-label">Contact Number</label>
                <input type="text" class="form-control" placeholder="Contact Number (optional)" id="phonenumber" name="contact" />
              </div>
              <div class="col-12">
                <label htmlFor="businesstype" class="form-label">Business</label>
                <input type="text" class="form-control" placeholder="Drugs & Chemist" id="businesstype" name="business" />
              </div>
              <div class="col-12">
                <label htmlFor="message" class="form-label">Service</label>
                <textarea type="text" class="form-control" placeholder="What's service you want from us" id="message" name="message"></textarea>
              </div>
              <div class="col-md-6">
                <label htmlFor="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-6">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Your Feddback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
