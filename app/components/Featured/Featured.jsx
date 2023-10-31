function Featured({ title, paraOne, paraTwo }) {
  return (
    <div className="max-h-[400px] w-full bg-white mt-10 py-10 rounded-3xl grid gap-8 grid-cols-1 lg:grid-cols-3 p-10">
      <h3 className="col-span-1 text-3xl font-semibold">{title}</h3>
      <p className="col-span-1 text-justify lg:px-10 font-[500] text-gray-600">{paraOne}</p>
      <p className="col-span-1 text-justify lg:px-10 font-[500] text-gray-600">{paraTwo}</p>
    </div>
  );
}

export default Featured;
