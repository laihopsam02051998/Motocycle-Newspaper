import React from "react";
import { ObjectFitBikerImage, ObjectFitImage } from "../../Image";
import { BikerCardStyle } from "./styles";

function BikerCard({
  image,
  name,
  abbreviatedName,
  countryImage,
  team,
  color,
}) {
  const classes = BikerCardStyle();

  return (
    <div className={classes.container} style={{ background: `${color}` }}>
      <ObjectFitBikerImage objectFit={"cover"} src={image} />
      <div className={classes.content}>
        <ObjectFitImage
          style={{ width: "2rem", height: "1.3rem", margin: "0.2rem 0rem" }}
          objectFit={"cover"}
          src={countryImage}
        />
        <h5 className={classes.firstName}>{name.split(" ")[0]}</h5>
        <h5>{name.split(" ").slice(1, name.split(" ").length).join(" ")}</h5>
        <p>{team}</p>
      </div>
      <div className={classes.nameLayout}>
        <h5>{abbreviatedName}</h5>
      </div>
    </div>
  );
}

export default BikerCard;
