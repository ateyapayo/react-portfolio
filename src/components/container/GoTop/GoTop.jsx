import React, { useState, useEffect } from "react";
import "./GoTop.scss";
import arrowUp from "../../../assets/images/arrow-up.svg";

const GoTop = () => {
  const [thePosition, setThePosition] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 740) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    (thePosition && (
      <img src={arrowUp} onClick={() => scrollToTop()} className="go-top"></img>
    )) || <></>
  );
};

export default GoTop;
