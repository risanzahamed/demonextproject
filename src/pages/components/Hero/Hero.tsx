import Image from "next/image";
import hero from "../../../assets/hero.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import hero1 from '../../../assets/hero.svg';

function Hero() {
  return (
    <div className="container mx-auto pb-12">
      <div className="flex justify-evenly items-center gap-2 py-12">
        <div className="flex flex-col items-start gap-12 h-96">
          <h1 className="text-5xl font-bold">
            Unique Idea <br />
            Design Solution
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quibusdam perferendis rem harum minima. Soluta, reiciendis ad? Atque
            recusandae facilis autem nesciunt commodi, laudantium voluptatem,
            soluta reiciendis temporibus ducimus illum?
          </p>
          <div className="flex items-center">
            <button className="h-14 bg-gradient-to-r from-[#F6395F] to-[#F97E35] px-6 text-xl text-white font-bold rounded btn">
              Free Quote +
            </button>
            <AiFillPlayCircle className="bg-[#FFFFFF text-[#F6395F]  text-5xl ml-4"/>
          </div>
        </div>

        <div className="h-96">
                <Image 
                alt="hero img"
                src={hero1}
                ></Image>
        </div>
      </div>
    </div>
  );
}

export default Hero;
