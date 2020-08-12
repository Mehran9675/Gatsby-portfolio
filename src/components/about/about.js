import React from "react"
import { ProfileType } from "../../types"
import './about.css';

const About = ({ about }) => {


return (

  <div>
    <h5 className="font-header font-semibold text-front uppercase mb-3">
      
      درباره
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      <p>{about}</p>
    </div>
  </div>
);
}

About.propTypes = {
  about: ProfileType.about,
}

export default About
