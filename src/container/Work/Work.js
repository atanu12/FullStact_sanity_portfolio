import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  // setUseState
  const [experience, setExperience] = useState([]);
  // fetch data from Db
  useEffect(() => {
    // Query for extrat the data
    const query = '*[_type == "experiences"]';

    // fetch the data
    client.fetch(query).then((data) => {
      setExperience(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Work <span>Experiences</span>
      </h2>

      <div className="app__work-exp">
        {experience.map((experience) => (
          <motion.div className="app__work-item" key={experience._id}>
            {console.log(experience)}
            <div className="app__work-exp-title">
              <p className="bold-text app__work-exp-header">
                {experience.companyname} {"  "} 
              </p>
              <p className="p-text app__work-exp-year">
              {experience.startyear} - {experience.endyear}{" "}
              </p>
            </div>
            <motion.div className="app__work-exp-works">
              {experience.works.map((work) => (
                <>
                  {console.log(work)}
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__work-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work._key}
                  >
                    <h4 className="bold-text">  Project Name:  {work.name}</h4>
                    <p className="p-text"> <span className="bold-text">Role :</span> {work.role}</p>
                    <p className="p-text"> <span className="bold-text">Description :</span> {work.description}</p>
                  </motion.div>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__work"),
  "work",
  "app__primarybg "
);
