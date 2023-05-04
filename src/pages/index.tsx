import BrandLogos from "./components/BrandLogos/BrandLogos";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ServicePrice from "./components/Service/ServicePrice";



export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
      <ServicePrice></ServicePrice>
      <BrandLogos></BrandLogos>
      <NewsLetter></NewsLetter>
      <FeedbackForm></FeedbackForm>
    </div>
  )
}
