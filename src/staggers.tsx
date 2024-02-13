import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./App.css";
import { useLayoutEffect } from "react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

function Sta() {
    const ref = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
    
      
            if (ref.current) {
                gsap.set(".box", {
                    borderRadius: 0,
                    background: "green"
                });
                gsap.to(".box", {
                    borderRadius: 100,
                    background: "orange",
                    duration:2,
                    y: -100,
                    stagger:{
                        each: 0.1,
                        from:11,
                        grid: "auto",
                        ease: "power2.inOut",
                        repeat: -1,
                        yoyo:true
                },
        });
    }}, []);
    return (
        <div className="con">
        
                <div className="box" ref={ref}></div>
                <div className="box" ref={ref}></div>
                <div className="box" ref={ref}></div>
                <div className="box" ref={ref}></div>
                <div className="box" ref={ref}></div>
                <div className="box" ref={ref}></div>
          
        </div>
    );
}

export default Sta;
