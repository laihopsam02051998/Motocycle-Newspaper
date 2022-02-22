import React, { useEffect, useState } from "react";
import BikerCard from "../../components/Card/BikerCard";
import { BikerStyle } from "./style";
import BikerData from "../../data/biker.json";
function Biker() {
  const classes = BikerStyle();
  const [biker, setBiker] = useState([]);
  useEffect(() => {
    const bikerList = BikerData.biker.bikerList;
    setBiker([...bikerList]);
    // return () => {};
  }, []);

  return (
    <div>
      <div className={classes.container}>
        {biker.map((item) => {
          return (
            <BikerCard
              key={item.id}
              image={item.image}
              name={item.name}
              abbreviatedName={item.abbreviatedName}
              countryImage={item.countryImage}
              team={item.team}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Biker;
