import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex flex-col w-full items-center ">
            {' '}
            <nav className="flex justify-between  p-10 w-11/12 border-b-2 border-black">
                <p className="text-2xl font-bold">ThePortfolyo</p>

                <IoMdMenu
                    className="text-2xl font-bold"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                />
            </nav>
            {toggle && (
                <ul
                    className="absolute bg-gray-500 text-center mt-28 mr-1 rounded self-end"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Home</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Skills</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Services</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Projects</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Timeline</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Testimonial</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Featured Work</a>
                    </li>
                    <li className="p-2 px-16 bg-gray-800 w-full hover:bg-gray-600">
                        <a href="#s">Contact</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Header;
