import React from 'react';

function Services(props) {
    return (
        <div className="flex flex-col items-center my-14">
            <p className="text-2xl font-bold my-10">MY SERVICES</p>
            {props.data.map((service) => (
                <div className="md:w-7/12 bg-gray-800 p-5 mt-5 flex justify-between items-center w-11/12 ">
                    <div className="flex flex-col  ">
                        <p className='text-xl font-bold'>{service.name}</p>
                        <p className='w-9/12  my-5'>{service.desc}</p>
                        <p className="bg-blue-500 text-white p-2 rounded m-2 w-12 justify-self-end">{service.charge}</p>
                    </div>
                    <img className="w-5/12 rounded" src={service.image.url} alt={service.name}></img>
                </div>
            ))}
        </div>
    );
}

export default Services;
