import React from "react";
import { ObjectFitImage } from "../../Image";
import { useStyleVideoBanner } from "./styles";

function VideoBanner({ image, title, intro }) {
  const classes = useStyleVideoBanner();
  return (
    <div className={classes.container}>
      <ObjectFitImage src={image} />
      <div
        className={classes.content}
        onClick={() => {
          alert(title);
        }}
      >
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>
    </div>
  );
}

export default VideoBanner;
