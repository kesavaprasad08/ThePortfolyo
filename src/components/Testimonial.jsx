import React from 'react';

function Testimonial(props) {
    console.log(props);
    return (
        <div className="w-11/12 p-5">
            {props.testimonials.map((test) => (
                <div className=" flex m-2  bg-red-500">
                    <img className="w-5/12 h-40" src={test.image.url} alt="a"></img>
                    <div>
                        <p>{test.position}</p>
                        <p>{test.review}</p>
                        <p> - {test.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Testimonial;
