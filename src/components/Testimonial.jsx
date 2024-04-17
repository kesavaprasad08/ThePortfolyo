import React, { useEffect, useRef } from 'react';
import './animation.css';

function Testimonial(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let count = 1;

        const handleAnimationIteration = () => {
            count++;
            container.style.setProperty('--count', count);
        };

        container.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            container.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    console.log(props);
    return (
        <div className="scroll-container flex flex-col items-center my-16" ref={containerRef}>
            <p className="text-2xl font-bold my-10 ">TESTIMONIALS</p>
            <div className="scroll-content mt-10">
                {props.testimonials.map((item, index) => (
                    <div className=" flex m-2  bg-gray-700 mr-2 ">
                        <img className=" h-40" src={item.image.url} alt="a"></img>
                        <div className="p-2">
                            <p>{item.position}</p>
                            <p className="text-xs">{item.review}</p>
                            <p> - {item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
