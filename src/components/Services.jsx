import React from 'react';

function Services(props) {
    return (
        <div className='flex flex-col items-center'>
            <p>Services</p>
            {props.data.map((service) => (
                <div className='md:w-5/12 bg-green-500 p-5 mt-5 flex justify-between '>
                  <div className='flex flex-col'>
                  <p>{service.name}</p>
                    <p>{service.desc}</p>
                    <p className='bg-blue-500 text-white p-2 rounded m-2 w-12'>{service.charge}</p>
                  </div>
                    <img className='w-5/12 rounded' src={service.image.url} alt={service.name}></img>
                </div>
            ))}
        </div>
    );
}

export default Services;
