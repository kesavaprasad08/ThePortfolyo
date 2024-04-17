import React from 'react';

function Skills(props) {
    const data = props.data.map((skill) => (
        <div key={skill.name} className="flex flex-col w-60 m-3 p-4 justify-between rounded bg-gray-800">
            <div className='flex justify-between'>
                <p>{skill.name}</p>
                {/* <p>{skill.percentage}%</p> */}
                
            <img className="w-20 " src={skill.image.url} alt={skill.name}></img>
            </div>
            
            <div className='w-full bg-white mt-5 flex flex-col rounded '>
                    <div className="flex  px-1 bg-green-500 justify-end  " style={{width:`${skill.percentage}%`}} >{skill.percentage}%</div>
                </div>
        </div>
    ));
    return (
        <div className="flex flex-col items-center p-5 my-5 ">
            <p className='text-2xl font-bold my-10'>MY SKILLS</p>
            <div className="flex flex-wrap justify-center">{data}</div>
        </div>
    );
}

export default Skills;
