import Image from "next/image";
import Choose from "../../../assets/WhyChooseUs.svg";

const WhyChooseUs = () => {
  return (
        <section className="py-16">
      <div className="flex container mx-auto">
        <div className="w-1/2">
          <Image
            className="h-96 w-full"
            src={Choose}
            alt="why choose us"
          ></Image>
        </div>
        <div className="w-1/2 space-y-4">
          <h4 className="text-xl underline text-[#F6395F]">Why Choose Us</h4>
          <h1 className="text-5xl font-bold">
            Best Agency Choose <br /> Clients Wisely
          </h1>
          <div className="flex justify-start items-center gap-6">
            <div className="bg-[#F979B6] px-4 py-4 rounded-full">
              <p className="bg-[#F979B6] text-white font-bold">01</p>
            </div>
            <div>
              <p className="text-xl font-bold">Free Cousulting</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-6">
            <div className="bg-[#51A1F8] px-4 py-4 rounded-full">
              <p className="bg-[#51A1F8] text-white font-bold">01</p>
            </div>
            <div>
              <p className="text-xl font-bold">Free Cousulting</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-6">
            <div className="bg-[#FAA876] px-4 py-4 rounded-full">
              <p className="bg-[#FAA876] text-white font-bold">01</p>
            </div>
            <div>
              <p className="text-xl font-bold">Free Cousulting</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;