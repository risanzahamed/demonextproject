import Image from "next/image";
import img from "../../../assets/icons/3d-casual-life-line-idea-bulb.png";
import img2 from "../../../assets/icons/add.png";
import img1 from "../../../assets/icons/idea.png";

const Offer = () => {
  return (
    <div>
      <div className="text-center lg:mt-32 mt-16 lg:mb-10">
        <p className="font-bold font-serif text-accent-600">
          Our Service Offer
        </p>
        <p className="lg:text-4xl font-serif font-bold text-2xl my-3 lg:my-5 lg:mb-8">
          Working Together To Create <br /> Something Unique
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:mx-32 mb-10 lg:gap-5 ">
        <div className="w-96  shadow-2xl p-8 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img}
              width={100}
              height={100}
              alt=""
              className="bg-accent-600 rounded-full p-3"
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-3 lg:my-5 text-xl font-bold">
              Creative Concept
            </h1>
          </div>
          <div>
            <p className="text-center">
              A creative concept is an overarching “Big Idea” that captures
              audience interest, influences their emotional response and
              inspires them to take action.
            </p>
          </div>

          <div>
            <p className="text-center my-4 lg:py-8 font-bold">Read More...</p>
          </div>
        </div>

        <div className="w-96 shadow-2xl p-8 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img1}
              width={100}
              height={100}
              alt=""
              className="bg-secondary-500 rounded-full p-3"
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-3 lg:my-5 text-xl font-bold">
              Brand Consultancy
            </h1>
          </div>
          <div>
            <p className="text-center">
              A creative concept is an overarching “Big Idea” that captures
              audience interest, influences their emotional response and
              inspires them to take action.
            </p>
          </div>
          <div>
            <p className="text-center my-4 lg:py-8 font-bold">Read More...</p>
          </div>
        </div>

        <div className="w-96  shadow-2xl p-8 flex flex-col justify-center items-center hover:border border-yellow-800">
          <div>
            <Image
              src={img2}
              width={100}
              height={100}
              alt=""
              className="bg-neural-600 rounded-full p-3"
            ></Image>
          </div>

          <div>
            <h1 className="text-center my-3 lg:my-5 text-xl font-bold">
              Advertise Design
            </h1>
          </div>
          <div>
            <p className="text-center">
              A creative concept is an overarching “Big Idea” that captures
              audience interest, influences their emotional response and
              inspires them to take action.
            </p>
          </div>
          <div>
            <p className="text-center my-4 lg:my-8 font-bold">Read More...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
