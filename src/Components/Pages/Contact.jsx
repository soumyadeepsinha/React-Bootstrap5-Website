import React, { useCallback } from 'react';
import './Pages.css';

const Contact = () => {

  // const FormData = useState()

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
            <form className="row g-3" onSubmit={formSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" placeholder="Joe" id="firstName" name="fname" onChange={FormData} />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Lee" id="lastName" name="lname" onChange={FormData} />
              </div>
              <div class="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="j.lee@email.com" id="email" name="email" onChange={FormData} />
              </div>
              <div class="col-12">
                <label htmlFor="phonenumber" className="form-label">Contact Number</label>
                <input type="text" className="form-control" placeholder="9123456789 (optional)" id="phonenumber" name="contact" onChange={FormData} />
              </div>
              <div class="col-12">
                <label htmlFor="businesstype" className="form-label">Business</label>
                <input type="text" className="form-control" placeholder="Drugs & Chemist" id="businesstype" name="business" onChange={FormData} />
              </div>
              <div class="col-12">
                <label htmlFor="message" className="form-label">Service</label>
                <textarea type="text" className="form-control" placeholder="What's service you want from us" id="message" name="message"></textarea>
              </div>
              <div class="col-md-6">
                <label htmlFor="inputCity" className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="E-Block Sector 2, Salt Lake City" id="inputCity" onChange={FormData} />
              </div>
              <div class="col-md-6">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" placeholder="700019" id="inputZip" onChange={FormData} />
              </div>
              <div class="col-12">
                <button type="submit" className="btn btn-primary">Your Feddback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact
