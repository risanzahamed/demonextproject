import Link from "next/link";
import BrandLogos from "./components/BrandLogos/BrandLogos";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Location from "./components/Location/Location";
import About from "./components/About/About";



export default function Home() {
  return (
    <div>
      <Link href="/check" className="bg-primary-700 py-2 px-5 text-white">Check</Link>
      <About></About>
      <BrandLogos></BrandLogos>
      <NewsLetter></NewsLetter>
      <FeedbackForm></FeedbackForm>
      <Location></Location>
    </div>
  )
}
