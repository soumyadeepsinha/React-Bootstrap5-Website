import React, { Component } from 'react'
import Common from './Common';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Common name="Welcome to JSONS" visit="/service" btn_name="Get Started" ide="Ideas" were="Website" />
      </React.Fragment>
    )
  }
}

export default Home
