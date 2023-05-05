import appStore from "../../../assets/BrandLogos/app-store.png";
import java from "../../../assets/BrandLogos/java.png";
import logo from "../../../assets/BrandLogos/logo.png";
import meta from "../../../assets/BrandLogos/meta.png";
import python from "../../../assets/BrandLogos/python.png";
import slack from "../../../assets/BrandLogos/slack.png";
import amazon from "../../../assets/BrandLogos/social.png";
import visa from "../../../assets/BrandLogos/visa.png";
import Image from "next/image";

const data = [
  {
    img: appStore,
    logo: "app-store",
    tag: "collections for android",
  },
  {
    img: java,
    logo: "app-store",
    tag: "Android application",
  },
  {
    img: logo,
    logo: "logo",
    tag: "for brand identity",
  },
  {
    img: meta,
    logo: "meta",
    tag: "social media",
  },
  {
    img: python,
    logo: "python",
    tag: "advance language",
  },
  {
    img: slack,
    logo: "slack",
    tag: "connect as need",
  },
  {
    img: amazon,
    logo: "amazon",
    tag: "jungle of product",
  },
  {
    img: visa,
    logo: "visa",
    tag: "send easy",
  }
];




const BrandLogos = () => {
  return (
    <div className="grid place-items-center text-center overflow-hidden py-20 min-w-full text-primary-700">
      <div className="m-auto max-w-screen-3xl">
        {/* m-w */}
        <div className="flex flex-shrink-0 gap-20 whitespace-nowrap">
          {/* m */}
          <div className="flex flex-shrink-0 gap-8 justify-around items-center min-w-full marquee-group">
            {/* m-g */}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
            {data.map((logo, id) => (
              <div className="grid animate place-items-center text-center" key={id}>
                <div className="w-14 h-14">
                  <Image
                    src={logo?.img}
                    alt="app-store"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="py-1"></p>
                <h1 className="text-2xl font-semibold tracking-wider leading-6 uppercase">
                  {logo?.logo}
                </h1>
                <p className="text-lg capitalize font-light leading-5 pt-1">
                  {logo?.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;