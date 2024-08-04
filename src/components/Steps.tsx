import step1 from "./assets/images/step1.svg";
import step2 from "./assets/images/step2.svg";
import step3 from "./assets/images/step3.svg";
import step4 from "./assets/images/step4.svg";

export default function Steps() {
  return (
    <div className="flex lg:flex-row flex-col mt-10 lg:mb-16 items-center justify-evenly mb-5">
        <div className="p-5">
          <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[441px]">
            A <span className="border-b-4 border-[#1F94AA]"> fertility lab </span> {" "}at your
            fingertips
          </p>
          <p className="text-[#3F555D] text-base mt-[23px] lg:w-[441px]">
            Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.
          </p>
          <br />
          <br />
          <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full">
            Get the inito kit
          </button>
          <p className="lg:w-[381px] text-sm text-[#88969A] mt-[23px]">
            * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {[step1, step2, step3, step4].map((step: any) => (
            <img src={step} alt={step} />
          ))}
        </div>
      </div>
  )
}
