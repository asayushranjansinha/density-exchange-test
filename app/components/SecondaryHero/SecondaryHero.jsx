import React from "react";

function SecondaryHero() {
  return (
    <section className="h-[70vh] w-full bg-blue-600 my-10 rounded-3xl p-10">
      <div className="w-full h-full grid grid-cols-2 p-10">
        <div className="col-span-1">
          <h4 className="text-xl font-serif">Built out of frustration</h4>
          <h4 className="text-3xl font-bold">Meet the ahead app</h4>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-4">
          <p className="text-md line-clamp-3 text-white w-96">
            A personalized pocket coach that provides bite-sized,science-driven
            tools to boost emotional intelligence.
          </p>
          <p className="text-md line-clamp-3 text-white w-80">
            Think of it as pocket cheerleader towards a better, more fulfilling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondaryHero;
