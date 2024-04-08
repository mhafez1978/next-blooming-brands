import "./test2.module.css";

const Test2 = () => {
  return (
    <div className="relative w-[100vw] h-[5vh] flex flex-col">
      <div className="w-full h-full absolute bg-slate-950">
        <div className="w-full h-full">
          <div className="w-full h-full bg-amber-500 bg-[url('/images/agency-office.webp')] bg-cover bg-center bg-fixed"></div>
        </div>
      </div>
      <div className=" z-20 bg-black min-h-[10vh] w-[100vw] flex flex-row justify-center items-center sm:py-2 lg:py-4">
        <h2 className="text-[#e0e7ff] font-black text-2xl leading-1 text-center lg:text-4xl pl-3">
          Have A{" "}
          <span className="text-amber-500 mr-1">
            <em>Project</em>
          </span>{" "}
          in Mind ? Let&apos;s{" "}
          <span className="text-amber-500">
            <em>Talk</em>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Test2;
