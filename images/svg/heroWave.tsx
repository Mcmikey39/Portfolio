"use client";

import { motion, useCycle } from "framer-motion";
import * as React from "react";

const wavePaths = [
  "M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,229.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L0,320Z",
  "M0,180L60,165C120,150,240,120,360,135C480,150,600,210,720,225C840,240,960,195,1080,180C1200,165,1320,165,1380,165L1440,165L1440,320L0,320Z",
  "M0,150L60,130C120,110,240,100,360,120C480,140,600,220,720,235C840,250,960,200,1080,170C1200,140,1320,150,1380,150L1440,150L1440,320L0,320Z",
];

const Herowave = () => {
  const [index, cycle] = useCycle(0, 1, 2);

  React.useEffect(() => {
    const interval = setInterval(() => {
      cycle();
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="h-[12rem] w-full md:h-[20rem]"
      >
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="1" />
            <stop offset="100%" stopColor="#0f1c2e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#fade)"
          initial={false}
          animate={{ d: wavePaths[index] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default Herowave;
