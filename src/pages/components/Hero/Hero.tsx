import Image from "next/image";
import hero from "../../../assets/hero.jpg";

function Hero() {
    return (
        <div className="container mx-auto pb-12">
           <Image src={hero} alt=""></Image>
        </div>
    );
}

export default Hero;