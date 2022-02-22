import React from "react";
import MenuListNomal from "../../components/MenuList/MenuListNomal";
import SizeSMenuList from "../../components/MenuList/SizeSMenuList";
import { styleLeaderboard } from "./style";

export default function AboutUs() {
  const classes = styleLeaderboard();
  const stadium = [
    {
      id: "ST01",
      value: "Trường đua 2K",
    },
    {
      id: "ST02",
      value: "Trường đua đại nam",
    },
    {
      id: "ST03",
      value: "Trường đua Hà Nội",
    },
  ];
  const tournament = [
    {
      id: "TN01",
      value: "VRRC",
    },
    {
      id: "TN02",
      value: "VNRC",
    },
    {
      id: "TN03",
      value: "DRAG",
    },
  ];
  const year = [2020, 2021, 2022];
  return (
    <div>
      <h1>styleLeaderboard</h1>
      <div className={classes.buttonGroupContainer}>
        <MenuListNomal name="Giải đấu" list={tournament} />
        <MenuListNomal name="Sân thi đấu" list={stadium} />
        <SizeSMenuList name="Năm" list={year} />
      </div>
    </div>
  );
}
