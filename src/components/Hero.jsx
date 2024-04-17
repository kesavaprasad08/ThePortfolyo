import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";



function Hero(props) {
    // console.log(props.data)
    return (
        <div className="flex flex-col justify-between  p-5 md:w-10/12 lg:flex-row">
            <div className="flex  flex-col  p-5">
                <p className="text-5xl font-bold my-6"> {props.data.name.toUpperCase()}</p>
                <p>{props.data.title}</p>
                <p className="my-3"> {props.data.subTitle}</p>
                <p className='flex my-2'><CiLocationOn/><pre> </pre>{props.data.address}</p>
                <p className='flex my-2'><IoIosMail /><pre> </pre>{props.data.contactEmail}</p>
                <p className='my-3'>" {props.data.quote} "</p>
                <p className='my-4'><pre>    </pre>{props.data.description}</p>
                <p className="bg-yellow-500 p-2 rounded w-44 text-center">Experience of {props.data.exp_year} years</p>
            </div>
            <img className="w-96 p-5 rounded" src={props.data.avatar.url} alt={props.data.name}></img>
        </div>
    );
}

export default Hero;
