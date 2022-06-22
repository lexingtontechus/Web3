import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        {/*<a className="hover:underline">Blog</a>*/}
        <img
          src="https://imgix.cosmicjs.com/74810d20-f0ee-11ec-8fb8-5d396858ac9b-logolxt.png"
          alt="Logo"
          height="25"
          width="25"
        />
        <a href="/" className="hover:underline">
          Web3
        </a>
      </Link>
      .
    </h2>
  );
}
