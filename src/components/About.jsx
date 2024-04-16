import React from 'react'

function About(props) {
  return (
    <div className='flex flex-col items-center w-7/12'>
      <p>"{props.data.quote}"</p> 
      <p>{props.data.title}</p>
      <p>{props.data.description}</p>
      <p className='bg-yellow-500 p-2 rounded m-5'>Experience of {props.data.exp_year} years</p>
    </div>
  )
}

export default About