import Herowave from "@/images/svg/heroWave";
import { Button } from "@heroui/button";
import Image from "next/image";
import About from "./about/page";

const Skills = [
  "HTML",
  "CSS / SASS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Django",
  "PostgreSQL",
  "Figma",
];

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-slate-800 to-black text-slate-50">
        <div className="container mx-auto flex min-h-[58rem] justify-center">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Full-Stack Web Developer
            </h1>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl">
              Enthusiastic about programming and always seeking to learn more.
            </p>
            <div className="space-x-6">
              <Button size="lg" className="bg-indigo-500 shadow-lg">
                Get in touch
              </Button>
              <Button
                size="lg"
                className="bg-slate-300 text-slate-900 shadow-lg"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
        <Herowave />
      </section>

      {/* About section */}
      <About />
    </>
  );
}
