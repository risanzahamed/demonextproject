import Offer from "./components/Service/Offer";
import ServicePrice from "./components/Service/ServicePrice";
import WorkingProcess from "./components/Service/WorkingProcess/WorkingProcess";

const check = () => {
  return (
    <div>
      <WorkingProcess></WorkingProcess>
      <ServicePrice></ServicePrice>
      <Offer></Offer>
    </div>
  );
};

export default check;
