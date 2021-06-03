import React from "react";

import "../styles/components/Header.css";

const Header = (props) => {
  const { current, best } = props.score;
  return (
    <div className="Header">
      <h1>MEMORY-REACTOR</h1>
      <div className="high-score">
        <h3>{`CURR: ${current}`}</h3>
        <h3>{`BEST: ${best}`}</h3>
      </div>
    </div>
  );
};

export default Header;
