import Link from "next/link";

export default function FooterLinksId({ lng, href, text }) {
  return (
    <li className="my-3 lg:my-2">
      <Link href={`/${lng}/#${href}`}>{text}</Link>
    </li>
  );
}
