import React, { Component } from 'react';
import webdesign from '../images/webdesign.png';
import Common from './Common';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Common name="Develope your site in unique Ways" image={webdesign} visit="/contact" btn_name="Contact us" ide="Dreams" were="Reality" />
      </React.Fragment>
    )
  }
}

export default About
