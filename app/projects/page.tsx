import Cards from "@/components/cards";
import Herowave from "@/public/images/svg/heroWave";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="bg-gradient-to-b from-slate-900 to-slate-950 py-32 text-slate-50"
      >
        <div className="translate-y-180 rotate-180">
          <Herowave />
        </div>
        <div className="flex justify-center pt-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl">Projects</h2>
        </div>

        <div className="container mx-auto h-auto pb-16">
          <div>
            <div className="mx-8 mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
