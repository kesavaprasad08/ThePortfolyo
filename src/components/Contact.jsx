import React from 'react';

function Contact(props) {
    return (
        <div className=" flex flex-col items-center p-10   w-full">
            <p>Contact Me</p>
            <div className="flex justify-between flex-wrap w-full ">
                <div className="flex">  
                    {props.handles.map((handle) => (
                        <a className="m-2 w-10 hover:scale-105" href={handle.url}>
                            <img src={handle.image.url} alt={handle.platform}></img>
                        </a>
                    ))}
                </div>
                <form className="bg-white text-black flex flex-col p-10 rounded w-80 ">
                    <p className="text-center">Send a Message</p>
                    <label className="mt-1">Full Name</label>
                    <input className="border-solid border-gray-200 rounded border-2 p-2 " type="text"></input>
                    <label className="mt-1">Email Address</label>
                    <input className="border-solid border-gray-200 rounded border-2 p-2 " type="text"></input>
                    <label className="mt-1">Message</label>
                    <textarea className="border-solid border-gray-200 rounded border-2 p-2   " type="text"></textarea>
                    <button className="bg-purple-500 text-white m-4 p-2 rounded">Get in Touch</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
