import React from 'react';

function Header() {
    return (
        <nav className="flex justify-between  p-10 w-11/12 border-b-2 border-black">
            <p className='text-2xl font-bold'>ThePortfolyo</p>
            <ul className="flex">
                <li className="mr-5">
                    <a href="#s">Home</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Skills</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Services</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Projects</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Timeline</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Testimonial</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Featured Work</a>
                </li>
                <li className="mr-5">
                    <a href="#s">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
