// index.js
import Link from "next/link";

//const l = require('../background.js')
export default function Index() {
  return (
    <div>
      <h1> Index </h1>
      <Link href="/about">About</Link>
    </div>
  );
}
