import Forum from "@/components/forum";

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-slate-950 py-32">
        <div className="container mx-auto">
          <span className="mx-8 flex h-4 rounded-lg border-t-1 bg-transparent"></span>
          <div className="my-20 flex justify-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl">Contact</h2>
          </div>

          <div className="container mx-auto h-auto">
            <div className="flex justify-center">
              <div className="mx-8 w-[40rem] rounded-lg bg-slate-800 p-8 shadow-lg">
                <Forum />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
