import React from "react";
import moviegif from "../images/movie.gif";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, } from 'mdbreact';

function Projects() {
  return (
    <div style={{ background: "linear-gradient(to right, #00f260, #0575e6)", paddingTop: "5rem" }} >
      <h2 style={{ paddingLeft: "30rem", paddingBottom: "5rem", color: "white" }}>PROJECTS</h2>
      <MDBContainer   >
        <MDBRow>

          {/*1st column*/}
          <MDBCol size="4">  <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src={moviegif} waves />
            <MDBCardBody>
              <MDBCardTitle>Finnkino Search App</MDBCardTitle>
              <MDBCardText>
                Web App made with React and Redux
                Finnkino movie theatre schedule search, filter, and favourites using xml API<br /><br /><br />
              </MDBCardText>
              <a className="profile-card__button button--blue js-message-btn" href="https://finnkino-react-redux.herokuapp.com/">
                Demo
                      </a>
            </MDBCardBody>
          </MDBCard>

          </MDBCol>

          {/*2nd column*/}
          {/* <MDBCol size="4">  <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>

          </MDBCol>
         3rd column*/}
          {/* <MDBCol size="4">  <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
</MDBCardText>
              <MDBBtn gradient="purple">Purple</MDBBtn>
            </MDBCardBody>
          </MDBCard>

          </MDBCol>
        3rd column*/}

        </MDBRow>
      </MDBContainer>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


export default Projects;
