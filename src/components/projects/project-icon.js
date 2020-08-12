import React from "react"
import { ProjectType } from "../../types"

const ProjectIcon = ({ icon }) => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={icon}
            rel="noreferrer noopener"
            target="_blank"
          >
            Github
          </a>
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
}

export default ProjectIcon
