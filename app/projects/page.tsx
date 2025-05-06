import Cards from "@/components/cards";
import Herowave from "@/images/svg/heroWave";

export default function Projects() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-black text-slate-50">
        <div className="translate-y-180 rotate-180">
          <Herowave />
        </div>
        <div className="flex justify-center">
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Projects
            </h2>
          </div>
        </div>

        <div className="container mx-auto h-[50rem]">
          <div>
            <div className="mx-4 mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
