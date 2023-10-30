function Featured({ title, paraOne, paraTwo }) {
  return (
    <div className="h-[30vh] max-h-[300px] w-full bg-white mt-10 rounded-3xl grid grid-cols-3 p-10">
      <div className="col-span-1 self-start">
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
      <div className="col-span-2 grid grid-cols-2">
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">{paraOne}</p>
        </div>
        <div className="col-span-1">
          <p className="w-4/5 mx-auto text-justify">{paraTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
