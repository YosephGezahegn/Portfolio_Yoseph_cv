import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBProgress } from 'mdbreact';

class Skills extends Component {
  render() {
    console.log(this.props.progress)
    return (
      <MDBRow>
        <MDBCol col={12}>
          <>
            {this.props.skill}   <MDBProgress className="my-2" value={this.props.progress} /> </>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default Skills;
