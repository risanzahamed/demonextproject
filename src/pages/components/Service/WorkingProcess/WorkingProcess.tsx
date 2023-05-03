// import img1 from "../../../assets/icons/budget-removebg-preview.png";
import img1 from "../../../../assets/icons/budget-removebg-preview.png";
import img2 from "../../../../assets/icons/delivery.png";
import img3 from "../../../../assets/icons/work3-removebg-preview (1).png";
import WorkingProcessCard from "./WorkingProcessCard";

const WorkingProcess = () => {
  const works = [
    {
      id: "1",
      title: " Discussion Budget",
      img: img1,
      details:
        "Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies.",
    },
    {
      id: "2",
      title: " Project Delivery",
      img: img2,
      details:
        "Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies.",
    },
    {
      id: "3",
      title: " Star Your Work",
      img: img3,
      details:
        "Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies.",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <p className="font-bold lg:mt-5 mt-4 mb-3 font-serif text-accent-600">
          Working Process
        </p>
        <p className="lg:text-4xl font-serif text-2xl font-bold lg:my-5 lg:mb-8">
          Helping You Open Windows of <br /> Opportunity Worldwide
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 lg:mx-32 lg:mb-32">
        {works.map((work) => (
          <WorkingProcessCard work={work} key={work.id}></WorkingProcessCard>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
