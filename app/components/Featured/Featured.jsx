import React from "react";

function Featured() {
  return (
    <section className="w-full h-[30vh] my-10 grid grid-cols-3 px-10 py-4 gap-10">
      <div className="col-span-1 h-full">
        <h3 className="text-3xl font-semibold">EQ beates IQ</h3>
      </div>
      <div className="col-span-1 h-full">
        <p className="w-4/5 mx-auto line-clamp-4">
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
      </div>
      <div className="w-4/5 mx-auto line-clamp-4">
        <p>
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29K a year.
        </p>
      </div>
    </section>
  );
}

export default Featured;
