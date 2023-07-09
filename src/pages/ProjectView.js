import img from "./../img/projects/02-big.jpg"
import BtnGitHub from "../components/BtnGitHub/BtnGitHub"
import { useParams } from "react-router-dom"
import {projects} from './../helpers/projectList'



function ProjectView(){
    const {id} = useParams()
    const project = projects[id]
    return(
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={img} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>
                <h1 className="title-1">{project.title}</h1>
                <img src={project.imgBig} alt={project.title} className="project-details__cover"/>
                <p>Skills: {project.skills}</p>
              




             
            <BtnGitHub link = "https://github.com"/>
            </div>
        </div>
    </main>

    )
}

export default ProjectView