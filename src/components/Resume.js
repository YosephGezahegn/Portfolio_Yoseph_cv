import React, { Component } from "react";
import { MDBCol, MDBRow, MDBAvatar } from 'mdbreact';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div style={{ padding: "5rem", background: "linear-gradient(to right, #ad5389, #3c1053)" }} >
        <h2 style={{ paddingLeft: "30rem", paddingBottom: "5rem", color: "white" }}>RESUME</h2>
        <MDBRow >
          <MDBCol col={4} style={{ background: "linear-gradient(to right, #373b44, #4286f4)", color: "white", padding: "3rem" }}>
            {/*
            <div style={{ textAlign: "center" }}>
              <img
                className="avatar avatar-128 img-circle"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
              <div className="profile-card__img">
                <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="avatar" />
              </div>
            </div>
            */}

            <h2 style={{ paddingTop: "2em" }}>Yoseph Alemu</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <p> I am currently a BIT student with a deep passion for understanding computers and learning different
               skills to provide me with the necessary skills to make a career out of it after finishing my studies.</p>

            <ul>
              <li>Providing innovative new ideas and solutions to problems.</li>
              <li>Able toLearning new technologies, Adaptable and able to pick up new skills.</li>
              <li>Having creative imagination.</li>
              <li> juggle priorities and multiple projects.</li>
            </ul>


            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
            <h5>Address</h5>
            <p>Kitarakuja 3, Helsinki</p>
            <h5>Phone</h5>
            <p>0449626797</p>
            <h5>Email</h5>
            <p>jofinhel@gmail.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
          </MDBCol>
          <MDBCol col={8} style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", color: "white", padding: "5rem" }}>
            <h2>Education</h2>

            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Addis Ababa University"
              studyDescription=" Business Management"
            />

            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Haaga-Helia University of Applied Sciences"
              studyDescription="Business Information Technology"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2012}
              endYear={2015}
              jobName=" Ethiopian Airlines"
              jobDescription="Cargo Systems and Handling Agen" />
            <ul><li> Loading on cargo spot system for all passenger and cargo flights.</li>
              <li>Check with offloading file and plan shipments for the next available flights.</li>
              <li>Check the availability of documents with corresponding shipments .</li>
              <li>Load preparation by considering, Aircraft type, booking, nature shipment.</li></ul>

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={50} />
          </MDBCol>
        </MDBRow>
      </div >

    );
  }
}

export default Resume;
