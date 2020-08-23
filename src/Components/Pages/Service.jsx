import React from 'react';
import { Link } from 'react-router-dom';
import development from '../images/development.jpg';
import analysis from '../images/analysis.jpg';
import design from '../images/design.jpg';
import asset from '../images/asset.svg';
import webapp from '../images/webapp.svg';
import designteam from '../images/designteam.svg';
import './Pages.css';

const Service = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mb-50 mx-auto">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={development} class="d-flex justify-content-center mx-auto" alt="Slider1" width="1600" height="480" />
                </div>
                <div class="carousel-item">
                  <img src={analysis} class=" d-flex justify-content-center mx-auto" alt="Slider2" width="1600" height="480" />
                </div>
                <div class="carousel-item">
                  <img src={design} class=" d-flex justify-content-center mx-auto" alt="Slider3" width="1600" height="480" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div className="row mycard">
              <div className="col-10 col-md-4 mx-auto">
                <div className="card mt-50">
                  <img src={webapp} className="card-img-top" alt="CardImg1" />
                  <div className="card-body">
                    <h5 className="card-title">Customization</h5>
                    <p className="card-text">Easily customize your World or Choose a Theme instead.</p>
                    <Link to="/" className="btn btn-primary">Browse More</Link>
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-4 mx-auto">
                <div className="card mt-50">
                  <img src={designteam} className="card-img-top" alt="CardImg2" />
                  <div className="card-body">
                    <h5 className="card-title">Welcome to Online World</h5>
                    <p className="card-text">Put your info & customize it as you want. Your Choice can be reached easily with our Code. It's You who build the website.</p>
                    <Link to="/" className="btn btn-primary">Browse More</Link>
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-4 mx-auto">
                <div className="card mt-50">
                  <img src={asset} className="card-img-top" alt="CardImg3" />
                  <div className="card-body">
                    <h5 className="card-title"> Being Online </h5>
                    <p className="card-text">Select your content & publish it online with us. We will arrange your website as per your desire. Let your viewers access it.</p>
                    <Link to="/" className="btn btn-primary">Browse More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Service
