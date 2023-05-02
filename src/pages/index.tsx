import Link from "next/link";
import About from "./components/About";
import Location from "./components/Location";
import Services from "./components/Service/Services";


export default function Home() {
  return (
    <div>
      <Link href="/check" className="bg-primary-700 py-2 px-5 text-white">Check</Link>
      <About></About>
      <Location></Location>
      <Services></Services>

    </div>
  )
}