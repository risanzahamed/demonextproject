import Image from "next/image";

import img from "../../../assets/icons/arrow.png";


interface Props {
  price: {
    _id: string;
    name: string;
    value: string;
  };
}

let ServicePriceCard= ({ price }: Props) => {

  console.log(price._id);

  return (
    <div className=" lg:my-10">
      <div className="card  bg-base-100 p-3 lg:p-6 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-2 lg:gap-14 items-center">
            <h2 className="lg:text-5xl text-2xl font-bold lg:font-bold">
              ${price._id}
            </h2>
            <p className="lg:text-xl lg:font-bold">per month</p>
          </div>

          <div className="lg:mt-12 my-5 lg:mb-8">
            <p className="lg:text-xl font-bold">Perfect for professional</p>
          </div>

          <div className="flex  items-center gap-3 my-2 lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p> Up to 100 keyphrases otimized</p>
          </div>
          <div className="flex  gap-3 my-2  items-center lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p>Custom dashboards: 4</p>
          </div>
          <div className="flex  gap-3 my-2 items-center lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p>Digital marketing expert</p>
          </div>
          <div className="flex  gap-3 my-2 items-center lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p>Content, and link monitoring</p>
          </div>
          <div className="flex  gap-3 my-2 items-center lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p>Content marketing assets: 4</p>
          </div>
          <div className="flex  gap-3 my-2 items-center lg:gap-4 lg:my-4">
            <Image src={img} width={32} height={32} alt=""></Image>
            <p>Upload your document</p>
          </div>
          <div className="card-actions flex justify-center">
            <button className="bg-secondary-600 text-white my-2  lg:my-3 lg:py-3 w-full rounded-2xl">
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePriceCard;
