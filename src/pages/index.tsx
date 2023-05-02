import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/check" className="bg-primary-700 py-2 px-5 text-white">Check</Link>
    </div>
  )
}