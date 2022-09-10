import React from "react";
import BundleApple from "./components/BundleApple";
import Faq from "./components/Faq";
import LastRow from "./components/LastRow";
import ParallexBg from "./components/ParallexBg";
import StudentPlan from "./components/StudentPlan";
import WatchAnywhere from "./components/WachAnywhere";

const AppleTVPlus = () => (
  <div>
    <ParallexBg />
    <WatchAnywhere />
    <Faq />
    <BundleApple />
    <StudentPlan />
    <LastRow />
  </div>
);

export default AppleTVPlus;
