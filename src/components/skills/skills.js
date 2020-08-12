import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"
import './skills.css';

const Skills = ({ skills }) => (
  <>
    <h4 className="font-header font-semibold text-front text-sm uppercase mb-3">
      مهارت ها
    </h4>
    <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
      {skills.map((skill, i) => (
        <Skill skill={skill} key={skill} i={i + 1} />
      ))}
    </ul>
  </>
)

Skills.propTypes = {
  skills: ProfileType.skills,
}

export default Skills
