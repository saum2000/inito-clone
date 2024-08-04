import React from "react";

export default function WhyMeasure() {
  return (
  
    <section className="absolute border-0 no-underline align-baseline box-border my-8 mx-7 lg:m-auto rounded-2xl z-2 bg-white text-size-adjust-100 lg:w-[844px] lg:h-[440px] shadow-[rgba(18,45,53,0.12)_7px_0px_14px] p-[41px]">
      <img
        className="lg:block hidden blue-calendar w-full float-right lg:-mt-16 lg:-mr-16 max-w-[120px]"
        src="https://cdn.inito.com/inito_website/blue_calendar.png"
        alt="blue calendar"
      />
      <h6 className="relative text-cyan-700 mb-2 font-bold text-[15px] leading-[25px]">
        Why measure the PdG? (urine metabolite of progesterone)?
      </h6>
      <p className="relative font-medium text-gray-800 text-[15px] leading-[25px] lg:w-[726px]">
        <strong className="relative">Anovulation</strong> (having a menstrual cycle with no egg) is actually a common
        occurrence, affecting 1 in 10 women*.
        <br />
        <br />
        If ovulation occurs, the levels of Progesterone and its urine metabolite PdG rise after a few days
        and stay elevated. Sustained, elevated PdG levels after peak fertility indicate a successful ovulation.
        <br />
        <br />
      </p>
      <div className="relative font-medium text-gray-800 text-[11px] leading-[16px]">
        <span className="block text-gray-400 mb-4 font-medium text-[12px] leading-[25px]">
          * Source: National Institutes of Health
        </span>
        <span className="block mb-4 font-bold text-[20px] leading-[25px]">
          “Inito is all that you need to give you the best chance of conception."
        </span>
        <div className="relative font-medium text-gray-800 text-[11px] leading-[16px] flex items-center">
          <img
            className="relative max-w-full align-bottom inline-block w-[65px] h-[65px]"
            src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg"
            alt="doctor"
          />
          <div className="relative font-medium text-gray-800 leading-[16px] ml-4 text-[10px]">
            <strong className="block font-bold text-[15px] leading-[10px]">
              Dr. Rachel Wagner
            </strong>
            <em className="block text-gray-500 text-[15px] leading-[10px] mt-4">
              MD
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}
