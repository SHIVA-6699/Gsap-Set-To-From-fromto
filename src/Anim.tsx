import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// Don't forget to register the plugin

import "./App.css";
gsap.registerPlugin(MotionPathPlugin);

function Ani() {
  const rel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rel.current) {
      gsap.set(rel.current, { y: 10, opacity: 1, duration: 1,yoyo:true,repeat:-1     });
      gsap.to(rel.current, {
        duration: 1,
        y: 100,
        opacity: 1,
        border:"5px solid green",
        yoyo:true,
        repeat:-1,
       
      });
    }
  }, []);

  return <div ref={rel} className="box"></div>;
}

export default Ani;
