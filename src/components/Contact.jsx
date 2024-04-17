import React from 'react';

function Contact(props) {
    console.log(props)
    return (
        <div className=" flex flex-col items-center p-10 lg:w-8/12 justify-center">
            <p className="text-2xl font-bold my-10 ">CONTACT ME</p>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between flex-wrap w-full ">
                <div > 
                    <p>{props.about.contactEmail}</p>
                    <p>{props.about.phoneNumber}</p>
                    <p>{props.about.address}</p>
                    
                <div className="flex my-10">  
                    {props.handles.map((handle) => (
                        <a className="m-2 w-10 hover:scale-105" href={handle.url}>
                            <img src={handle.image.url} alt={handle.platform}></img>
                        </a>
                    ))}
                    </div>
                </div>
                <form className="bg-black flex flex-col p-10 rounded w-80 ">
                <p className="text-2xl  mb-5 text-center">Send a Message</p>
                    <label className="my-1 text-sm">Full Name</label>
                    <input className="border-solid border-gray-200 rounded border-2 p-1 mb-5 " type="text"></input>
                    <label className="my-1 text-sm">Email Address</label>
                    <input className="border-solid border-gray-200 rounded border-2 p-1 mb-5 " type="text"></input>
                    <label className="my-1 text-sm">Message</label>
                    <textarea className="border-solid border-gray-200 rounded border-2 p-2   " type="text"></textarea>
                    <button className="bg-red-500 text-white m-4 p-2 rounded-3xl    ">Get in Touch</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
