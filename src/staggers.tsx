import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./App.css";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

function Sta() {
    // Create an array of refs inside the functional component
    const ref1 = Array.from({ length: 10 }, () => useRef<HTMLDivElement | null>(null));

    useEffect(() => {
        // Inside the useEffect hook, we can safely access the refs
        ref1.forEach((ref) => {
            if (ref.current) {
                gsap.set(ref.current, {
                    borderRadius: 0,
                    background: "green"
                });
                gsap.to(ref.current, {
                    opacity: 1,
                    borderRadius: 100,
                    background: "orange",
                    repeat: -1,
                    duration: 2,
                    y: -100,
                    yoyo: true
                });
            }
        });
    }, []); // Empty dependency array to run the effect once

    return (
        <div className="con">
            {/* Map over the refs array and render the div elements */}
            {ref1.map((ref, index) => (
                <div className="box" key={index} ref={ref}></div>
            ))}
        </div>
    );
}

export default Sta;
