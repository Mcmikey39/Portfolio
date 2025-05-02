import * as React from "react";

const Herowave = () => (
  <svg
    className="bottom-0 w-full md:h-[30rem]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="fade" x1={0} y1={0} x2={0} y2={1}>
        <stop offset="0%" stopColor="#1e293b" stopOpacity={1} />
        <stop offset="100%" stopColor="#0f1c2e" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path
      fill="url(#fade)"
      d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,229.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </svg>
);
export default Herowave;
