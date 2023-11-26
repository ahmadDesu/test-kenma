import React from "react";

function Banner() {
  return (
    <section>
      {/* Hero Section */}
      <div className="w-full h-[300px] lg:h-[400px] bg-[rgba(217,_217,_217,_0.05)] relative top-0 flex items-center justify-center">
        <div className="w-[350px] lg:w-[798px]">
          <h1 className="text-white text-xl lg:text-5xl font-bold text-center font-primary">
            Help You to Understand{" "}
            <span className="text-[#00C7A3]">Every Case</span> That We Use
          </h1>
          <p className="mt-7 text-center text-white text-sm lg:text-xl">
            Give you more resource for learning coding and you can make better
            and faster your own business with our high quality template
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
