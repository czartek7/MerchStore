import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title rFade">
        Merch <span>Store</span>
      </div>
      <div className="desc lFade">
        <p>
          All the merchandise you've ever dreamed about, in one place,
          reasonably priced. Want some?
        </p>
      </div>

      <Link to="/shop">
        <button className="homebutton">
          <p>Take me to the shop</p>
        </button>
      </Link>
    </div>
  );
}

export default Home;
