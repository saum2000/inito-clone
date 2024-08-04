import fertilityChart from "./assets/images/fertility-chart.svg";
import neverMissADay from "./assets/images/never-miss-a-day.svg";
import trackFertility from "./assets/images/track-fertility.svg";

export default function PredictAndConfirm(){
    return (
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
    )
}