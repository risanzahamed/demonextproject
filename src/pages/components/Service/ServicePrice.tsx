import ServicePriceCard from "./ServicePriceCard";

const ServicePrice = () => {
  const prices = [
    {
      money: "160.00",
      name: "Up to 100 keyphrases otimized",
      value: "Custom dashboards",
    },
    {
      money: "170.00",
      name: "Up to 100 keyphrases otimized",
      value: "Custom dashboards",
    },
    {
      money: "150.00",
      name: "Up to 100 keyphrases otimized",
      value: "Custom dashboards",
    },
  ];

  return (
    <div className="lg:mx-16 mx-5">
      <div className="text-center">
        <p className="lg:mt-10 mt-10 text-accent-600 font-serif font-bold">
          Pricing Plans
        </p>
        <p className="lg:text-4xl text-2xl mb-5 mt-3 lg:mt-3 font-bold font-serif">
          Our Affordable Pricing Plans
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {prices.map((price, money) => (
          <ServicePriceCard key={money} price={price}></ServicePriceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicePrice;
