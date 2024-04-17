import React from 'react';

function Timeline(props) {
    console.log(props);
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const education = props.education.map((edu) => (
        <div className="bg-gray-800 m-3 p-5 rounded w-11/12">
            <div className="flex flex-wrap ">
                <div>
                    <p className="font-bold text-xl"> {edu.company_name}</p>
                    <p className=""> {edu.jobTitle}</p>

                    <ul className="list-disc pl-5 text-sm text-xs m-1">
                        {edu.bulletPoints.map((point) => (
                            <li className="m-1 p-1">{point}</li>
                        ))}
                    </ul>
                </div>
                <p className="md:absolute md:ml-80 text-xs ml-44 p-2">
                    {'( '}
                    {monthNames[new Date(edu.startDate).getMonth()]} {new Date(edu.startDate).getDate()}
                    {', '}
                    {new Date(edu.startDate).getFullYear()} {' - '}
                    {monthNames[new Date(edu.endDate).getMonth()]} {new Date(edu.endDate).getDate()}
                    {', '}
                    {new Date(edu.endDate).getFullYear() + ' )'}
                </p>
            </div>
        </div>
    ));
    const experience = props.experience.map((exp) => (
        <div className="bg-gray-800 m-3 p-5 rounded w-11/12">
            <div className="flex flex-wrap ">
                <div>
                    <p className="font-bold text-xl"> {exp.company_name}</p>
                    <p className=""> {exp.jobTitle}</p>

                    <ul className="list-disc pl-5 text-sm text-xs m-1">
                        {exp.bulletPoints.map((point) => (
                            <li className="m-1 p-1">{point}</li>
                        ))}
                    </ul>
                </div>
                <p className="md:absolute md:ml-80 text-xs ml-44 p-2">
                    {'( '}
                    {monthNames[new Date(exp.startDate).getMonth()]} {new Date(exp.startDate).getDate()}
                    {', '}
                    {new Date(exp.startDate).getFullYear()} {' - '}
                    {monthNames[new Date(exp.endDate).getMonth()]} {new Date(exp.endDate).getDate()}
                    {', '}
                    {new Date(exp.endDate).getFullYear() + ' )'}
                </p>
            </div>
        </div>
    ));
    return (
        <div className="flex flex-col items-center ">
            <p className="text-2xl font-bold my-10 ">EDUCATION</p>
            {education}
            <p className="text-2xl font-bold my-10">EXPERIENCE</p>
            {experience}
        </div>
    );
}

export default Timeline;
