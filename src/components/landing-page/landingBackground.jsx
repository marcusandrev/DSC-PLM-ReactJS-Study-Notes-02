import React from "react";

// image background
import landingbg from "../../assets/landingbg.png";

export default function landingBackground() {
  return (
    <div>
      <img
        src={landingbg}
        style={{ width: "100%", height: "auto", justifyContent: "center" }}
      />
    </div>
  );
}
