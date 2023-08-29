// SkillSection.js
import React from 'react';

export default function SkillSection() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
    // Add more skills here
  ];

  return (
    <div className="skill-section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <p>{skill.name}</p>
            <div className="skill-level">
              <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


