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
      <div className="flex justify-center mt-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">About</h2>
      </div>
      <div className="container mx-auto flex min-h-[40rem] -mt-24">
        <div className="flex flex-col md:flex-row items-center text-center">
          <div className="w-72 md:w-92 md:h-auto rounded-2xl overflow-hidden mx-auto md:-mr-1">
            <Image
              src="/images/about.png"
              alt="Michael"
              width={200}
              height={200}
              className="object-cover w-full h-full shadow-lg mt-12"
            />
          </div>

          <div className="text-center md:text-left | md:w-1/2 space-y-4 px-8">
            <h1 className="text-3xl font-bold">Hi, My name is Michael</h1>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-slate-50 pb-8">
        {Skills.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}
