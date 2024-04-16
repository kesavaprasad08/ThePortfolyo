import React from 'react';

function Timeline(props) {
    console.log(props);
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const education = props.education.map((edu) => (
        <div className="bg-gray-400 m-3 p-3 rounded">
            <p> {edu.company_name}</p>
            <p> {edu.jobTitle}</p>
            <p>
                {monthNames[new Date(edu.startDate).getMonth()]} {new Date(edu.startDate).getDate()}
                {', '}
                {new Date(edu.startDate).getFullYear()} {' - '}
                {monthNames[new Date(edu.endDate).getMonth()]} {new Date(edu.endDate).getDate()}
                {', '}
                {new Date(edu.endDate).getFullYear()}
            </p>
            <ul className="list-disc pl-5 text-sm">
                {edu.bulletPoints.map((point) => (
                    <li>{point}</li>
                ))}
            </ul>
        </div>
    ));
    // console.log(propExp)
    const experience = props.experience.map((exp) => (
        <div className="bg-purple-500 m-3 p-3 rounded">
            <p> {exp.company_name}</p>
            <p> {exp.jobTitle}</p>
            <p>
                {monthNames[new Date(exp.startDate).getMonth()]} {new Date(exp.startDate).getDate()}
                {', '}
                {new Date(exp.startDate).getFullYear()} {' - '}
                {monthNames[new Date(exp.endDate).getMonth()]} {new Date(exp.endDate).getDate()}
                {', '}
                {new Date(exp.endDate).getFullYear()}
            </p>
            <ul className="list-disc pl-5 text-sm">{exp.bulletPoints.map((point) => <li>{point}</li>).slice(0, exp.bulletPoints.length - 1)}</ul>
        </div>
    ));

    // console.log(propExp,'experience')
    return (
        <div>
            <p>Education</p>
            {education}
            <p>Experience</p>
            {experience}
        </div>
    );
}

export default Timeline;
