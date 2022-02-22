import React, { useEffect, useState } from "react";
import CourseCard from "../../components/Card/CourseCard";
import { styleHiring } from "./style";
import courseData from "./../../data/course.json";
function Hiring() {
  const classes = styleHiring();
  const [videoData, setvideoData] = useState([]);
  useEffect(() => {
    const data = courseData.course.courseList;
    setvideoData([...data]);

    // return () => {
    //   console.log(" UNMOUNT");
    // };
  }, []);

  return (
    <div className={classes.raceEngineeringContainer}>
      <h1>Kỹ thuật đua</h1>
      <div className={classes.courseContainer}>
        {videoData.map((item) => {
          return (
            <CourseCard
              key={item.id}
              title={item.videoTitle}
              image={item.image}
              youtubeLink={item.videoLink}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Hiring;
