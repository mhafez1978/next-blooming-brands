import React from "react";

const SocialProof = () => {
  return (
    <section id="about">
      <div className="w-[100vw] bg-black text-white flex flex-col justify-center items-center px-4 py-8 sm:py-14 ">
        <h2 className="text-xl font-bold italic text-center mb-2 lg:text-4xl">
          We Help Your <span className="text-amber-500">Business</span> Bloom
        </h2>
        {/* <h2 className="text-xl font-bold italic text-center mb-2 lg:text-3xl">
          Your business <span className="text-amber-500">growth</span> starts
          here
        </h2> */}
        <p className="w-[90%] mx-auto text-center lg:w-[50%] text-sm lg:text-md lg:px-20">
          We craft digital experiences that captivate and engage.
          <br />
          Call{" "}
          <a
            href="tel:+19788887688"
            className="text-amber-500 hover:text-amber-800"
          >
            +1 978 888 7688
          </a>{" "}
          for a free consultation
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
