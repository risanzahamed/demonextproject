import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";



interface Props {
  work: {
    title: string;
    img: StaticImageData;
    details: string;
  };
}



const WorkingProcessCard =  ({ work }: Props)  => {
console.log(work.title);

  const imageStyle: CSSProperties = {
    width: "200px",
    height: "180px",
  };

  return (
    <div>
      <div className="w-96 p-5 flex flex-col justify-center items-center hover:border border-yellow-800">
        <div>
          <Image
            src={work.img}
            width={200}
            height={250}
            alt=""
            style={imageStyle}
            className=""
          ></Image>
        </div>

        <div>
          <h1 className="text-center my-5 lg:my-5 text-xl font-bold">
            {work.title}
          </h1>
        </div>
        <div>
          <p className="text-center">{work.details.slice(0, 150)}..</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
