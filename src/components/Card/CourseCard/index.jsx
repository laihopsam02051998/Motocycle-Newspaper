import React, { useState, useEffect } from "react";
import { ObjectFitImage } from "../../Image/index.js";
import { PostTitle } from "../VideoCard/styles.js";
import { CourseStyle } from "./styles.js";

function CourseCard({ title, image, youtubeLink }) {
  const classes = CourseStyle();
  const [isOpenVideo, setisOpenVideo] = useState(false);
 

  return (
    <div
      className={classes.container}
      onClick={() => {
        setisOpenVideo(!isOpenVideo);
      }}
    >
      <div className={classes.image}>
        <ObjectFitImage objectFit={"cover"} src={image} />
      </div>
      <div className={classes.content}>
        <PostTitle>{title}</PostTitle>
      </div>
      <div
        className={classes.video}
        style={{ display: isOpenVideo ? "flex" : "none" }}
      >
        <iframe
          width="800"
          height="450"
          src={youtubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default CourseCard;
