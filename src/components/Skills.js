import React, { useEffect, useState } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }
        const data = await response.json();
        if (data && data.user && data.user.skills) {
          setSkills(data.user.skills.slice(0, 6)); // Get only the first six skills
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
    window.addEventListener("scroll", activeSkillProgress);

    return () => {
      window.removeEventListener("scroll", activeSkillProgress);
    };
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="skills_wrapper">
            {skills.map((skill) => (
              <div className="dodo_progress" key={skill._id}>
                <div
                  className="skillsInner___ progress_inner"
                  data-value={skill.percentage}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.percentage}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
