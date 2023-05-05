// import img1 from "../../../assets/icons/budget-removebg-preview.png";
import Image from "next/image";
import img1 from "../../../../assets/icons/budget-removebg-preview.png";
import img2 from "../../../../assets/icons/delivery.png";
import img3 from "../../../../assets/icons/work3-removebg-preview (1).png";
import { CSSProperties } from "react";
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

  const imageStyle: CSSProperties = {
    width: "200px",
    height: "180px",
  };

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
      

        <div className="w-96 p-5 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img1}
              width={200}
              height={250}
              alt=""
              style={imageStyle}
              className=""
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-5 lg:my-5 text-xl font-bold">
              Discussion Budget
            </h1>
          </div>
          <div>
            <p className="text-center">Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies...</p>
          </div>
        </div>

        <div className="w-96 p-5 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img2}
              width={200}
              height={250}
              alt=""
              style={imageStyle}
              className=""
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-5 lg:my-5 text-xl font-bold">
              Project Delivery
            </h1>
          </div>
          <div>
            <p className="text-center">Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies.</p>
          </div>
        </div>

        <div className="w-96 p-5 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img3}
              width={200}
              height={250}
              alt=""
              style={imageStyle}
              className=""
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-5 lg:my-5 text-xl font-bold">
              Star Your Work
            </h1>
          </div>
          <div>
            <p className="text-center">Over the course of preparing and adopting a budget, the parties involved in the process will have many (many) discussions. These discussions offer opportunities to identify concerns, priorities, and goals, and to make any changes to your policies...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
