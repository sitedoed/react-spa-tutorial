import React from 'react';
import './UsefulLinks.css';
import LinksLIstOne from './LinksLIstOne';
import LinksListTwo from './LinksListTwo';
import LinksListThree from './LinksListThree';

export default function UsefulLinks() {
  return (
    <div>
      <section id="usefulLinks" className="">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding"
              data-wow-delay=".1s"
            >
              <h2>
                Useful <span>Links</span>
              </h2>
              <p>
              Here you can find some free and very useful resources, 
              including what we used in this tutorial! 
              Feel free to share, to copy and paste! Do whatever you want! 
              It's all ours and under Creative Commons License!
              </p>
            </div>
            <LinksLIstOne />
            <LinksListTwo />
            <LinksListThree />
          </div>
        </div>
      </section>
    </div>
  )
}
