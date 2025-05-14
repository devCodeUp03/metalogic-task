import Faqs from "../common/Faqs";
import HaveAProject from "../common/HaveAProject";
import HeroSection from "../common/HeroSection";
import Methodology from "../common/Methodology";
import QualityAssurance from "../common/QualityAssurance";
import TechStack from "../common/TechStack";

const InBetween = () => {
  return (
    <div>
      <HeroSection />
      <TechStack />
      <QualityAssurance />
      <Methodology />
      <Faqs />
      <HaveAProject />
    </div>
  );
};

export default InBetween;
