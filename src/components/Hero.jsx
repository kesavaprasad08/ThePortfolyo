import React from 'react';

function Hero(props) {
    // console.log(props.data)
    return (
            <div className="flex justify-between  p-5 w-10/12">
                <div className="flex  flex-col  p-5">  
                <p className="text-5xl font-bold"> {props.data.name.toUpperCase()}</p>
               
                <p className=""> {props.data.subTitle}</p>
                <p>{props.data.address}</p>
                <p>{props.data.contactEmail}</p>
                </div>
                <img className="w-2/6 p-5 rounded" src={props.data.avatar.url} alt={props.data.name}></img>
            </div>
    );
}

export default Hero;
