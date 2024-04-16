import React from 'react';

function Skills(props) {
    const data = props.data.map((skill) => (
        <div key={skill.name} className="flex  w-44 m-3 p-5 rounded">
            <div>
                <p>{skill.name}</p>
                <p>{skill.percentage}%</p>
            </div>
            <img className="w-20" src={skill.image.url} alt={skill.name}></img>
        </div>
    ));
    return (
        <div className="flex flex-col items-center p-5 ">
            <p>MY SKILLS</p>
            <div className="flex flex-wrap justify-center">{data}</div>
        </div>
    );
}

export default Skills;
