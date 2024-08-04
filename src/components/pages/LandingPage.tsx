// import React from "react";
import Header from "../Header";
import WhyMeasure from "../WhyMeasure";
// images

import fertilityChart from "../assets/images/fertility-chart.svg";
import neverMissADay from "../assets/images/never-miss-a-day.svg";
import trackFertility from "../assets/images/track-fertility.svg";
import women from "../assets/images/women.svg";
import high from "../assets/images/high.svg";
import peak from "../assets/images/peak.svg";
import low from "../assets/images/low.svg";
import ovulation from "../assets/images/ovulation.svg";
import chart from "../assets/images/chart.svg";

import step1 from "../assets/images/step1.svg";
import step2 from "../assets/images/step2.svg";
import step3 from "../assets/images/step3.svg";
import step4 from "../assets/images/step4.svg";



import FeedbackSlider from "../FeedbackSlider";
import Footer from "../Footer";
import HomeBanner from "../HomeBanner";
import Brands from "../Brands";

function LandingPage() {
  return (
    <div>
      <Header />
      <HomeBanner/>
      <Brands/>
      

      <div className="lg:mt-[70px] mt-[50px] text-center lg:p-5 p-2 m-auto content">

        <p className="lg:text-4xl text-3xl font-bold text-[#112D35]">
          The  {" "}
          <span className="border-b-4 border-[#1F94AA]">only</span>
          {" "}fertility kit you will ever need
        </p>

        <p className="lg:w-[568px] w-fit-content m-auto text-sm text-[#3F555D] mt-[24px]">
          Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy:{" "}
          <p className="font-bold">Progesterone</p>.
        </p>
      </div>

      <div className="text-center p-5 mb-8">

        <p className="lg:text-2xl text-3xl font-bold text-[#112D35]">
          What makes Inito different?
        </p>

        <p className="lg:w-[532px] m-auto text-sm text-[#3F555D] mt-[24px]">

          Inito is the only fertility monitor that measures all{" "}
          <span className="font-bold">4 hormones</span> on a <span className="font-bold">single test strip</span>,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>

      {/* Predict & Confirm */}
      <div className="lg:w-[1240px] lg:m-auto m-5 rounded-[40px] bg-[#B4E4F273] ">
        <div className="flex lg:flex-row items-center flex-col justify-evenly pb-10">
          <div className="rounded-[20px] bg-[#B4E4F2]">
            <img
              src={fertilityChart}
              alt={fertilityChart}
              className="lg:rounded-tr-[40px]"
            />
          </div>
          <div className="text-start lg:p-10 p-7">
            <p className="lg:text-4xl text-3xl font-bold text-[##112D35] lg:w-[500px]">
              Predict and confirm your ovulation with{" "}
              <span className="border-b-4 border-[#1F94AA]">actual</span> data
            </p>
            <p className="lg:w-[503px] m-auto text-base text-[#3F555D] mt-[28px]">
              Unlike most ovulation tests that only give you "yes/no" results,
              Inito provides real numerical values of your fertility hormones.
            </p>
            <p className="lg:w-[503px] m-auto text-base text-[#3F555D] mt-[24px]">
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </p>
            <br />
            <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full ">
              Get the inito kit
            </button>
          </div>


        </div>

        <div className="flex lg:flex-row items-center flex-col-reverse justify-evenly mx-auto pb-10">
          <img src={neverMissADay} alt={neverMissADay} className="lg:p-0 px-4" />
          <img
            src={trackFertility}
            alt={trackFertility}
            className=""
          />

        </div>
      </div>
      <br />
      <br />

      <div className="h-[220px] flex justify-center">
        <WhyMeasure />
      </div>


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
      <div className="flex lg:flex-row flex-col mt-10 lg:mb-16 items-center justify-evenly">
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
      <br />

      <FeedbackSlider />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default LandingPage;
