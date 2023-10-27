function Featured2() {
  return (
    <section className="h-[30vh] max-h-[300px] w-full bg-white mt-10 rounded-3xl grid grid-cols-3 p-10 items-center">
      <div className="col-span-1 self-start">
        <h3 className="text-3xl font-semibold">Be the best you with EQ</h3>
      </div>
      <div className="col-span-2 grid grid-cols-2">
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">
            Not having you own emotions under control might be holding you back.
          </p>
        </div>
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">
            Additionally, not understanding those of others stops you from being
            parent, friend you can be.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Featured2;
