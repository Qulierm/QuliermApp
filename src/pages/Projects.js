import Project from "../components/Card/Project"
import {projects} from "./../helpers/projectList"




function Projects(){
    return(
<main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
            {projects.map((project, index) => {
return (
<Project key={project.title} title={project.title} img={project.img} index={index}/>
)
})}

            </ul>
        </div>
    </main>
)
}

export default Projects