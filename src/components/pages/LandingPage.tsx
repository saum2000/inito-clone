import Header from "../Header";
import WhyMeasure from "../WhyMeasure";

import FeedbackSlider from "../FeedbackSlider";
import Footer from "../Footer";
import HomeBanner from "../HomeBanner";
import Brands from "../Brands";
import Intro from "../Intro";
import PredictAndConfirm from "../PredictAndConfirm";
import KeyFeatures from "../KeyFeatures";
import Steps from "../Steps";

function LandingPage() {
  return (
    <div>
      <Header />
      <HomeBanner/>
      <Brands/>
      <Intro/>
      <PredictAndConfirm/>
      <div className="h-[220px] mt-16 flex justify-center">
        <WhyMeasure />
      </div>
      <KeyFeatures/>
      <Steps/>
      <FeedbackSlider />
      <Footer />
    </div>
  );
}

export default LandingPage;
