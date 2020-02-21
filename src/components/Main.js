import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "../Styling/landingpage.css";
import res1 from "../images/res1.jpg";


class Main extends Component {
  render() {
    return (
      <div>
        <MDBRow className="Main-MDBRow">
          <MDBCol col={12}>
            <div>
              <div className="wrapper">
                <div className="profile-card js-profile-card">
                  <div className="profile-card__img">
                    <img src={res1} alt="avatar" />
                  </div>
                  <div className="profile-card__cnt js-profile-cnt">
                    <div className="profile-card__name">Yoseph Alemu</div>
                    <div className="profile-card__txt">
                      Front-end Developer from
                                          </div>
                    <div className="profile-card-loc">
                      <span className="profile-card-loc__icon">
                        <svg className="icon">
                          <use xlinkHref="#icon-location" />
                        </svg>
                      </span>
                      <span className="profile-card-loc__txt">
                        Helsinki, Finland
                      </span>
                    </div>
                    <div className="profile-card-inf">
                      <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title">
                          FEW SKILLS
                        </div>
                        <div className="profile-card-inf__txt">
                          {" "}
                          Python | Bootstrap | JavaScript | React | React
                          Native | NodeJS | Express | MongoDB | HTML/CSS | Bootstrap
                          <br />
                          Made with React
                        </div>
                      </div>
                    </div>

                    <div className="profile-card-social">
                      {/*--------------------------------------------------------------- */}
                      <a
                        href="https://github.com/YosephGezahegn"
                        className="profile-card-social__item github"
                      >
                        <span className="icon-font">
                          <svg className="icon">
                            <use xlinkHref="#icon-github" />
                          </svg>
                        </span>
                      </a>
                      {/*--------------------------------------------------------------- */}
                      <a
                        href="https://codepen.io/Josephmagna"
                        className="profile-card-social__item codepen"
                      >
                        <span className="icon-font">
                          <svg className="icon">
                            <use xlinkHref="#icon-codepen" />
                          </svg>
                        </span>
                      </a>
                      {/*--------------------------------------------------------------- */}
                      {/*--------------------------------------------------------------- */}
                      <a
                        href="https://www.linkedin.com/in/yoseph-alemu-759391113/"
                        className="profile-card-social__item linkedin"
                      >
                        <span className="icon-font">
                          <svg className="icon">
                            <use xlinkHref="#icon-linkedin" />
                          </svg>
                        </span>
                      </a>
                      {/*--------------------------------------------------------------- */}
                    </div>
                    <div className="profile-card-ctr">

                      <button
                        className="profile-card__button button--orange"
                        style={{ color: "blue" }}
                      > Projects</button>
                    </div>
                  </div>
                  <div className="profile-card-message js-message">
                    <form className="profile-card-form">
                      <div className="profile-card-form__container">
                        <textarea
                          placeholder="Say something..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="profile-card-form__bottom">
                        <button className="profile-card__button button--blue js-message-close">
                          Send
                        </button>
                        <button className="profile-card__button button--gray js-message-close">
                          Cancel
                        </button>
                      </div>
                    </form>
                    <div className="profile-card__overlay js-message-close" />
                  </div>
                </div>
              </div>
              <svg hidden="hidden">
                <defs>
                  {/*--------------------------------------------------------------- */}
                  <symbol id="icon-codepen" viewBox="0 0 32 32">
                    <title>codepen</title>
                    <path d="M31.872 10.912v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096 0 0 0-0.064-0.064-0.064 0-0.064-0.064-0.064-0.064-0.096l-0.192-0.192v-0.064l-0.064-0.064-14.592-9.696c-0.448-0.32-1.056-0.32-1.536 0l-14.528 9.696-0.32 0.32c0 0-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064-0.064 0.064-0.064 0.096 0 0 0 0.064-0.064 0.064 0 0.064 0 0.064-0.064 0.096v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.096 0 0.16v9.696c0 0.064 0 0.096 0 0.16v0.064c0 0.064 0 0.064 0 0.096v0.064c0 0.064 0 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096 0 0 0 0.064 0.064 0.064 0 0.064 0.064 0.064 0.064 0.096l0.256 0.256 0.064 0.032 14.528 9.728c0.224 0.16 0.48 0.224 0.768 0.224s0.544-0.064 0.768-0.224l14.528-9.728 0.32-0.32c0 0 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0.064-0.064 0.064-0.096 0 0 0-0.064 0.064-0.064 0-0.064 0-0.064 0.064-0.096v-0.032c0-0.064 0-0.064 0-0.096v-0.064c0-0.064 0-0.096 0-0.16v-9.664c0-0.064 0-0.096 0-0.224zM17.312 4l10.688 7.136-4.768 3.168-5.92-3.936v-6.368zM14.56 4v6.368l-5.92 3.968-4.768-3.168 10.688-7.168zM2.784 13.664l3.392 2.304-3.392 2.304c0 0 0-4.608 0-4.608zM14.56 28l-10.688-7.136 4.768-3.2 5.92 3.936v6.4zM15.936 19.2l-4.832-3.232 4.832-3.232 4.832 3.232-4.832 3.232zM17.312 28v-6.432l5.92-3.936 4.8 3.168-10.72 7.2zM29.12 18.272l-3.392-2.304 3.392-2.304v4.608z" />
                  </symbol>
                  {/*--------------------------------------------------------------- */}
                  <symbol id="icon-github" viewBox="0 0 32 32">
                    <title>github</title>
                    <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z" />
                    <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z" />
                    <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z" />
                    <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z" />
                    <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z" />
                    <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z" />
                    <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z" />
                    <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z" />
                  </symbol>
                  {/*--------------------------------------------------------------- */}

                  {/*--------------------------------------------------------------- */}


                  <symbol id="icon-linkedin" viewBox="0 50 512 512"  >
                    <title>linkedin</title>
                    <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                  </symbol>


                </defs>
              </svg>

            </div>

          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <br />
        <br />

      </div >
    );
  }
}

export default Main;
