import Image from "next/image";
import { CSSProperties } from "react";

interface IPROPS {
  work: {
    id: string;
    title: string;
    img: any;
    details: string;
  };
}

const WorkingProcessCard: React.FC<IPROPS> = ({ work }) => {
  const {  img, title, details } = work;

  const imageStyle: CSSProperties = {
    width: "200px",
    height: "180px",
  };

  return (
    <div>
      <div className="w-96 p-5 flex flex-col justify-center items-center hover:border border-yellow-800">
        <div>
          <Image
            src={img}
            width={200}
            height={250}
            alt=""
            style={imageStyle}
            className=""
          ></Image>
        </div>

        <div>
          <h1 className="text-center my-5 lg:my-5 text-xl font-bold">
            {title}
          </h1>
        </div>
        <div>
          <p className="text-center">{details.slice(0, 150)}..</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
