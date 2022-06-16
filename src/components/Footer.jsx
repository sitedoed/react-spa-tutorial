import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <p className="copyright">&copy; 2022 Site do Ed</p>
        </div>
        <div className="col">
          <a href="#top" className="arrow_up">
            {" "}
            <FontAwesomeIcon icon={faCircleArrowUp} />{" "}
          </a>
        </div>
      </div>
    </div>
  )
}
