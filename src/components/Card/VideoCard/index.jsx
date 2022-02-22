import React from "react";
import { ObjectFitImage } from "../../Image";
import {
  ImageContainer,
  VideoCardContainer,
  VideoContent,
  PostDate,
  PostTitle,
  PostIntro,
} from "./styles";

function VideoCard({ image, date, title, intro, link, type }) {
  console.log(image);
  return (
    <VideoCardContainer>
      <ImageContainer>
        <ObjectFitImage src={image} objectFit="cover" alt="" />
      </ImageContainer>
      <VideoContent>
        <PostDate>
          <p>{date}</p>
        </PostDate>
        <PostTitle>
          <p>{title}</p>
        </PostTitle>
        <PostIntro>
          <p>{intro}</p>
        </PostIntro>
      </VideoContent>
    </VideoCardContainer>
  );
}

export default VideoCard;
