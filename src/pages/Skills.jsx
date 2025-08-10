import React, { useEffect, useRef } from 'react';
import Card from '../components/Card';
import '../styles/skills.css';
import { skillsData } from '../data/SkillsData.js';

const Skills = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="skills-section">
      <div className="container">        
        {skillsData.map((section, index) => (
          <div 
            key={section.id} 
            className="skill-section"
            ref={el => sectionRefs.current[index] = el}
          >
            <h2>{section.title}</h2>
            <div className="cards-grid">
              {section.skills.map((skill, skillIndex) => (
                <Card 
                  key={skill.id}
                  image={skill.image}
                  title={skill.title}
                  description={skill.description}
                  delay={skillIndex * 100}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;