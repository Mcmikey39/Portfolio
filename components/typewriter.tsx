"use client";

import Typical from "react-typical";

export default function Typewriter() {
  {
    return (
      <Typical
        steps={["Hello! I Am Michael", 5000, "Full Stack Developer", 5000]}
        loop={Infinity}
        wrapper="span"
      />
    );
  }
}
