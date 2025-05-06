import Image from "next/image";

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

export default function About() {
  return (
    <section className="bg-gradient-to-b from-black to-slate-900 text-slate-50">
      <div className="mt-16 flex justify-center pb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">About</h2>
      </div>
      <div className="container mx-auto flex min-h-[30rem]">
        <div className="flex flex-col items-center text-center md:flex-row">
          <div className="md:w-92 mx-auto w-72 overflow-hidden rounded-2xl md:h-auto">
            <Image
              src="/images/about.png"
              alt="Michael"
              width={200}
              height={200}
              className="h-full w-full object-cover shadow-lg"
            />
          </div>

          <div className="| space-y-4 px-8 text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold">Hi, My name is Michael</h1>
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-300">
                A junior developer with a strong interest in coding and always
                looking to learn new things. I enjoy exploring different
                programming languages and tools to improve my skills.
              </p>
              <p className="text-gray-300">
                I'm friendly and work well with others, open to sharing ideas
                and learning from my team. I'm eager to continue growing as a
                developer and developing my abilities through experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-16 text-center text-slate-50 md:grid-cols-4">
        {Skills.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}
