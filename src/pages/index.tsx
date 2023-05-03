import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      {/* <Link href="/check" className="bg-primary-700 py-2 px-5 text-white">Check</Link> */}

      <Header></Header>
      <Footer/>
    </div>
  )
}