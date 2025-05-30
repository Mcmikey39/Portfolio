import Herowave from "@/public/images/svg/heroWave";
import { Button } from "@heroui/button";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-slate-800 to-black pt-48 text-slate-50 md:pt-60 lg:pt-72">
        <div className="container mx-auto flex justify-center px-4">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-indigo-500">Full-Stack</span> Web Developer
            </h1>
            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl">
              Enthusiastic about{" "}
              <span className="text-indigo-500">programming</span> and always
              seeking to <span className="text-indigo-500">learn more</span>.
            </p>
            <div className="space-x-6">
              <Link href="#contact">
                <Button
                  href="#contact"
                  size="lg"
                  className="bg-indigo-500 shadow-lg"
                >
                  Get in touch
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-36">
          <Herowave />
        </div>
      </section>

      <About />
      <Projects />
      <Contact />

      <footer className="bg-slate-900 text-slate-50">
        <div className="container mx-auto flex min-h-[3rem] flex-col items-center justify-center">
          {" "}
          <span className="text-sm">
            © {new Date().getFullYear()} Michael C. B. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
