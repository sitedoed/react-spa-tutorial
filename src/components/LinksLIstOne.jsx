import React from 'react';
import { usefulLinksOne } from './LinksData';

export default function LinksLIstOne() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4 wow fadeInLeft animated">
      <div className="links-list-wrapper ">
        <div className="links-list">
          <div className="value-box">
            <div className="value-box-content">
              <span className="value">
                <i></i>
                <span className="number">TUTORIALS</span>
              </span>
              <span className="month invisible"></span>
            </div>
          </div>
          <div className="content-box">
            <ul>
              {usefulLinksOne.map((data) => {
                return(
                  <li key={data.id}><a href={data.href}>{data.title}</a></li>
                );
              })}
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
