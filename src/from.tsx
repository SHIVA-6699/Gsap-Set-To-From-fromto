import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./App.css";

gsap.registerPlugin(MotionPathPlugin);

const Shiva = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (ref1.current) {
            // from is also there
            gsap.fromTo(ref1.current, {
                y: -200,
                repeat: -1,
                duration:2,
                opacity: 1,
            },{
                y: 100,
                repeat: -1,
                duration: 2,
                opacity: 1,
                yoyo:true
            });
        }
    }, []);

    return (
        <>
            <div className="box1" ref={ref1}></div>
        </>
    );
};

export default Shiva;
