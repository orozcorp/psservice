import Link from "next/link";

export default function FooterLinks({ lng, href, text }) {
  return (
    <li className="my-3 lg:my-2">
      <Link href={`/${lng}/${href}`}>{text}</Link>
    </li>
  );
}
