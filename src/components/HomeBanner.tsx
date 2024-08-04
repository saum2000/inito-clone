import phone from "./assets/images/phone-screen.svg";


export default function HomeBanner() {
    return  <div className="grid lg:grid-flow-col grid-flow-row items-center banner">
    <div className="relative lg:left-[90px] p-5 lg:text-start text-center ">
      <div className="flex items-baseline lg:gap-3 gap-1">
     
      {[...Array(5)].map(() => (
        <img
        className="user-rating inline-block lg:w-3 w-2 mb-8"
        src="https://cdn.inito.com/inito_website/star.png"
        alt="rating star"
      />
      ))}
      <div className="lg:text-normal text-xs">TRUSTED BY 20,000+ COUPLES</div>
      </div>
      <p className="lg:text-5xl text-2xl text-[#112D35] lg:w-[650px] font-bold">
        Track your fertility hormones at home, <br />
        in 10 minutes.
      </p>
      <p className="text-base text-[#112D35] lg:w-[400px] font-light">
        Get accurate results of <b> Estrogen, LH and Progesterone</b> with Inito,
        the all-in-one, FDA-registered fertility monitor.
      </p>

      <br />
      <img src={phone} alt={phone} className="lg:hidden block " />
      <button className="bg-cyan text-white font-medium text-base rounded-full p-4">
        How does inito work?
      </button>
    </div>
    <img src={phone} alt={phone} className="lg:block hidden" />
  </div>
}