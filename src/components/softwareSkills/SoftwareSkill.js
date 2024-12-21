import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}>
                {/* <i 
                className={skills.fontAwesomeClassname}
                style={{ color: skills.iconColor}}
                ></i> */}

<img
                  src={skills.imageUrl} // Use the image path from the array
                  alt={skills.skillName} // Add alt text for accessibility
                  className="software-skill-image" // Add a CSS class to style the image
                />
                
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
