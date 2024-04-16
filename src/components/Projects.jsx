import React from 'react';

function Projects(props) {
    console.log(props);
    const data = props.data.map((project) => (
        <div key={project.sequence} className="flex flex-col m-3 items-center p-7 lg:w-5/12 ">
            <img className="m-2 " src={project.image.url} alt={project.title}></img>
            <p>{project.title}</p>
            <div className="flex">
                {project.techStack.map((tech) => (
                    <p className="mx-2" key={tech}>
                        {tech}
                    </p>
                ))}
            </div>
            <button className="bg-black text-white p-2">Details</button>
        </div>
    ));
    return (
        <div className="flex flex-col items-center w-full ">
            {data}
            <p>kesav</p>
        </div>
    );
}

export default Projects;
