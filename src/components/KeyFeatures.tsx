import women from "./assets/images/women.svg";
import high from "./assets/images/high.svg";
import peak from "./assets/images/peak.svg";
import low from "./assets/images/low.svg";
import ovulation from "./assets/images/ovulation.svg";
import chart from "./assets/images/chart.svg";

export default function KeyFeatures() {
  return (
    <div className=" m-auto lg:pt-[220px] pt-[650px] bg-[#E1F4FA] flex flex-col items-center">
        <p className="lg:text-4xl font-bold text-[#112D35] text-center mx-auto mt-[50px] mb-[25px] p-5 lg:w-[640px] lg:block hidden">
          Why Inito is the smarter way to get <span className="border-b-4 border-[#1F94AA]">pregnant</span>
        </p>


        <div className="bg-white flex lg:flex-row flex-col-reverse lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5 rounded-2xl">
          <div className="p-8">
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Adapts to your{" "}
              <span className="text-[#9d9e9e]">irr</span>egular cycle
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.

            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>

          </div>
          <img src={women} alt={women} className="lg:h-[576px] object-fill" />
        </div>

        <div className="bg-white flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5 rounded-2xl">
          <img src={high} alt={high} className="lg:h-[576px] object-fill " />
          <div className="p-8">
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Inito <span className="border-b-4 border-[#1F94AA]">tracks</span>{" "}
              everything so you don’t have to
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              The Inito Fertility Monitor comes with a free easy-to-use App, so
              you can track your fertile days with ease and know exactly when
              you ovulate.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Our App notifies you for everything:
            </p>
            <li className="text-base text-[#3F555D] list-disc">
              Your fertility levels
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When to test on the right days
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When you’ve successfully ovulated
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              And when to roll into bed!
            </li>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
        </div>

        <div className="bg-white flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5 rounded-2xl">

          <br />
          <div className="p-10">
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Get charts and actual values of your{" "}
              <span className="border-b-4 border-[#1F94AA]">hormones</span>{" "}
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Actual numerical values are necessary to know whether your PdG
              levels are sufficient enough to support a healthy pregnancy.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Studies show that Pdg levels lower than 7.9ng/ml in serum (around
              10ug/ml PdG) 6-8 days after ovulation are associated with lower
              pregnancy outcomes.
            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
          <img src={chart} alt={chart} className="lg:h-[576px] object-fill " />
        </div>
        <br />
        <br />


      </div>
  )
}
