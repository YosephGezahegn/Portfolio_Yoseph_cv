import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

class Experience extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </MDBCol>
        <MDBCol col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default Experience;
