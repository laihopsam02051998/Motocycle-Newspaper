import React from "react";
import { ObjectFitImage } from "../../Image";
import { PostContainer } from "./styles";
import { TiTleNews, NewsDecription, Date } from "./../../Typography";
import IconShare from "../../Icon/IconShare";
function NewsCard() {
  return (
    <div>
      <PostContainer>
        <div style={{ width: " 100%", height: "12rem", overflow: "hidden" }}>
          <ObjectFitImage
            objectFit={"cover"}
            src="https://vcdn-vnexpress.vnecdn.net/2020/07/17/Egernica-Ego-2-6914-1594976335.jpg"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Date>12/10/2022</Date>
          <IconShare />
        </div>
        <TiTleNews>
          Tổng kết giải đua xe Mô tô Việt Nam 2020 (VMRC 2020)
        </TiTleNews>
        <NewsDecription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          repellendus laborum pariatur Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Totam repellendus laborum pariatur
        </NewsDecription>
      </PostContainer>
    </div>
  );
}

export default NewsCard;
