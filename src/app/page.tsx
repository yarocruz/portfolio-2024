import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <nav>
        <ul className="flex">
          <li className="mr-5">
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/projects">PORTFOLIO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
