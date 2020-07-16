import React from 'react';
import web from "../images/web_developer.png";
import { Link } from 'react-router-dom';
import './Pages.css';

const Common = (props) => {
  return (
    <React.Fragment>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_background">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-15 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>{props.name}</h1>
                  <p>Develop Your Business with <strong className=" company">Json's Pvt. Ltd.</strong> & get always Connected with Your Custommers</p>
                  <h2 className="my-3">We illustrate your {props.ide} into {props.were}</h2>
                  <div className="mt-3">
                    <Link className="btn btn-started" to={props.visit}>{props.btn_name}</Link>
                  </div>
                </div>
                <div className="col-md-6 pt-15 order-1 order-lg-2 myimg">
                  <img className="img-fluid animated" src={web} alt="webdeveloper" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Common
