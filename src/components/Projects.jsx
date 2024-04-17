import React, { useState } from 'react';
import Modal from './ui/Modal.jsx';

function Projects(props) {
    // console.log(props);
    const [modal, setModal] = useState(false);
    const [content, setContent] = useState(null);
    console.log(content);
    const modalHandler = (dat) => {
        console.log(dat);
        setContent(
            <Modal
                onClose={() => {
                    setModal(false);
                }}
            >
                <div className="flex flex-col items-center p-2">
                    <button
                        className="self-end bg-red-500 p-2 text-white rounded"
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        Close
                    </button>
                    <div className="flex flex-col items-center">
                        <img className="w-5/12 m-1" src={dat.image.url} alt={dat.title}></img>
                        <p className='m-1'>{dat.title}</p>
                        <div className="flex m-1">
                            {dat.techStack.map((tech) => (
                                <p className="m-1 bg-blue-900 p-1 rounded text-xs text-white" key={tech}>
                                    {tech}
                                </p>
                            ))}
                        </div>
                        <p className='m-1'>{dat.description}</p>
                        <div className='m-2'> 
                        <a className='m-2 bg-blue-500 text-white rounded p-2' href={dat.githuburl}>Github Link</a>
                        <a className='m-2 bg-blue-500 text-white rounded p-2' href={dat.liveurl}>Live Link</a>
                        </div>
                    </div>
                </div>
            </Modal>
        );
        setModal(true);
    };
    const data = props.data.map((project) => (
        <div key={project.sequence} className="flex flex-col m-3 items-center p-5 lg:w-5/12 bg-gray-800 rounded ">
            <img className="m-2" src={project.image.url} alt={project.title}></img>
            <p className="m-2 text-xl text-green-500 font-bold">{project.title}</p>
            <div className="flex">
                {project.techStack.map((tech) => (
                    <p className="m-1 bg-blue-900 p-1 rounded text-xs" key={tech}>
                        {tech}
                    </p>
                ))}
            </div>
            <button
                className="bg-blue-500 text-white m-2 p-1 rounded hover:bg-blue-400"
                onClick={() => {
                    modalHandler(project);
                }}
            >
                Details
            </button>
        </div>
    ));
    return (
        <div className="flex flex-col flex-wrap items-center  ">
            {modal && content}
            <p className="text-2xl font-bold my-10">MY PROJECTS</p>
            <div className="flex  flex-wrap justify-center sm:w-7/12 w-11/12">{data}</div>
        </div>
    );
}

export default Projects;
