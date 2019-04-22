import React from "react"
import AboutMeTools from "./AboutMeTools";

const AboutMeSkills = () => {
  return (
    <div className={'row'}>
      <div>
        <AboutMeTools/>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          <li>Cross-functional communication</li>
          <li>Produces and iterates on both low and high fidelity prototypes</li>
          <li>Validates before implementing new features</li>
          <li>Facilitates client feedback and project delivery</li>
          <li>Collaborative Design (Product + Dev teams)</li>
          <li>Strong Visual Design Skills</li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <h2>User Research Tools</h2>
        <ul>
          <li>Usability Testing</li>
          <li>Open/Closed Card Sorting</li>
          <li>User Interviews</li>
          <li>Remote User Research</li>
          <li>Rapid Prototyping</li>
          <li>Heuristic Evaluations</li>
          <li>Journey Maps</li>
          <li>Content Architecture Funnel</li>
          <li>Affinity Diagramming</li>
        </ul>
      </div>
    </div>
  )
};

export default AboutMeSkills;
