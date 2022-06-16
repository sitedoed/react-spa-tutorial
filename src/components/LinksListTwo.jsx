import React from 'react';
import { usefulLinksTwo } from './LinksData';

export default function LinksListTwo() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4 wow zoomIn animated">
      <div className="links-list-wrapper ">
        <div className="links-list standard">
          <div className="value-box">
            <div className="value-box-content">
              <span className="value">
                <i></i>
                <span className="number"> RESOURCES </span>
              </span>
              <span className="month">Nice And Free</span>
            </div>
          </div>
          <div className="content-box">
            <ul>
            <ul>
              {usefulLinksTwo.map((data, key) => {
                return(
                  <li key={data.key}><a href={data.href}>{data.title}</a></li>
                );
              })}
            </ul>
            </ul>
          </div>
          <div className="page-up">
            <a href="#top">
              <span>Page Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
