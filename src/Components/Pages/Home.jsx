import React, { Component } from 'react';
import webdev from "../images/web_developer.png";
import Common from './Common';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Common name="Welcome to JSONS" image={webdev} visit="/service" btn_name="Get Started" ide="Ideas" were="Website" />
      </React.Fragment>
    )
  }
}

export default Home
