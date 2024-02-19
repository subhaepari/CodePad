import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="header-div">
        <h1>
          <FontAwesomeIcon icon={faPenToSquare} />
          CodePad
        </h1>
        <h2>Code the future</h2>
      </div>
    </header>
  );
}

export default Header;
