import React from "react";
import './GetStarted.css';
import SlideBg from "../assets/img/react_page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faFileCode,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

export default function GetStarted() {
  return (
    <>
      <section id="get-started">
        <div className="container">
          <div className="row">
            {/* First Row */}

            {/* Get Started*/}
            <div
              className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
              data-wow-delay=".5s"
            >
              <h2>
                Get Started<span>Take the tutorial</span>
              </h2>
              <p>
                <a
                  href="https://reactjs.org/tutorial/tutorial.html"
                  target="blank"
                >
                  https://reactjs.org/tutorial/tutorial.html{" "}
                </a>
              </p>
            </div>
            {/* Get Started*/}

            {/*First Col*/}
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4">
              <div className="row">
                <FontAwesomeIcon
                  className="fa fa-apple iconfont"
                  icon={faCode}
                />
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                  data-wow-delay=".5s"
                >
                  <h3>A Simple Component</h3>
                  <p>
                    React components implement a render() method that takes
                    input data and returns what to display. This example uses an
                    XML-like syntax called JSX. Input data that is passed into
                    the component can be accessed by render() via this.props.
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                  data-wow-delay=".5s"
                ></div>
              </div>

              <div className="row">
                <FontAwesomeIcon
                  className="fa fa-apple iconfont"
                  icon={faKeyboard}
                />
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                  data-wow-delay=".6s"
                >
                  <h3>A Stateful Component</h3>
                  <p>
                    In addition to taking input data (accessed via this.props),
                    a component can maintain internal state data (accessed via
                    this.state). When a component’s state data changes, the
                    rendered markup will be updated by re-invoking render().
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                  data-wow-delay=".6s"
                ></div>
              </div>
            </div>
            {/*First Col*/}

            {/*Second Col*/}
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-xl-4 wow bounceIn animated textcenter"
              data-wow-delay=".4s"
            >
              <img src={SlideBg} alt="slide-bg" className="mb-5" />
            </div>
            {/*Second Col*/}

            {/*Third Col*/}
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4">
              <div className="row">
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                  data-wow-delay=".5s"
                >
                  <h3>An Application</h3>
                  <p>
                    Using props and state, we can put together a small Todo
                    application. This example uses state to track the current
                    list of items as well as the text that the user has entered.
                    Although event handlers appear to be rendered inline, they
                    will be collected and implemented using event delegation.
                  </p>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated">
                  <FontAwesomeIcon
                    className="fa fa-css3 iconfont2"
                    icon={faLaptopCode}
                  />
                </div>
              </div>

              <div className="row">
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                  data-wow-delay=".6s"
                >
                  <h3>A Component Using External Plugins</h3>
                  <p>
                    React allows you to interface with other libraries and
                    frameworks. This example uses remarkable, an external
                    Markdown library, to convert the textarea’s value in real
                    time.
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                  data-wow-delay=".6s"
                >
                  <FontAwesomeIcon
                    className="fa fa-css3 iconfont2"
                    icon={faFileCode}
                  />
                </div>
              </div>
            </div>
            {/*Third Col*/}
          </div>
          {/* first row */}
        </div>
      </section>
    </>
  );
}
