import React from "react";
import GetRequest from "../GetRequest";

import "./Body.scss";

const Body = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__overlay">
          <div className="hero__item">
            <div className="hero__text">
              <h2 className="hero__title">
                Test assignment for front-end developer
              </h2>
              <p className="hero__explan">
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with
                accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving.
              </p>
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
      <GetRequest />
    </>
  );
};

export default Body;
