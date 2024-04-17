"use client";
import "./test2.module.css";
import { useRouter } from "next/navigation";

const Test2 = () => {
  const router = useRouter();
  return (
    <div className="relative w-[100vw] min-h-[5vh] flex flex-col">
      <div className="w-full h-full absolute bg-slate-950">
        <div className="w-full h-full">
          <div className="w-full h-full bg-amber-500/20 bg-[url('/images/agency-office.webp')] bg-cover bg-center bg-fixed"></div>
        </div>
      </div>
      <div className="min-h-[10vh] w-[100vw] flex flex-row justify-center items-center z-20 bg-gradient-to-r from-sky-200 to-sky-300 sm:py-2 lg:py-4">
        <div className="text-black font-black leading-1 text-center sm:py-4 lg:text-4xl">
          <h3 className="mb-4 text-2xl">Have A Project in Mind ?</h3>
          <button
            onClick={() => router.push("/schedule-a-call")}
            className="text-lg border-2 border-sky-500 rounded-md pl-4 pr-4 pt-2 pb-2 hover:bg-sky-500 hover:text-white"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test2;
