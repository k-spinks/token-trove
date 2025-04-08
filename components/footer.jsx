import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  House,
  Facebook,
  Instagram,
  Twitter,
} from "@deemlol/next-icons";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-4 text-center">
      <nav className="grid grid-cols-5 gap-4 w-4/5 m-auto">
          <Link href={"/"}>
            <Image
              src={"/token_trove_logo.png"}
              alt="token trove logo"
              width={100}
              height={100}
            />
          </Link>

        <div className="flex flex-col justify-center">
          <h3 className="footer-heading mb-3">Shop</h3>
          <ul className="text-sm">
            <li className="mb-3">
              <Link href={"/boardgames"}>Board Games</Link>
            </li>
            <li className="mb-3">
              <Link href={"/cardgames"}>Card Games</Link>
            </li>
            <li>
              <Link href={"/accessories"}>Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-3">
            <h3 className="footer-heading">Newsletter</h3>
            <p>Sign up for our newsletter!</p>
          </div>
          <form>
            <label htmlFor="newsletter-email"></label>
            <input
              type="text"
              name="newsletter-email"
              placeholder="example@email.com"
              className="bg-gray-100 text-black p-1 rounded-md focus:outline-0"
            />
          </form>
        </div>

        <div className="flex flex-col justify-evenly">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="flex flex-col justify-center item">
            <li className="flex gap-2 justify-center mb-3">
              <Phone size={16} color="#FFFFFF" />
              <a href="tel:414-2322-2220" className="text-sm">414-2322-2220</a>
            </li>
            <li className="flex gap-2 justify-center mb-3">
              <Mail size={16} color="#FFFFFF" />
              <a href="mailto:TokenTrove@business.com" className="text-sm">
                TokenTrove@company.com
              </a>
            </li>
            <li className="flex gap-2 justify-center mb-3">
              <House size={16} color="#FFFFFF" />
              <a href="#" className="text-sm">
                1234 N Meeple Blvd
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading mb-3">Social Media</h3>
          <ul className="flex flex-col justify-evenly ">
            <li className="flex gap-2 justify-center mb-3">
              <Facebook size={16} color="#FFFFFF" />
              <a href="#">TokenTrove</a>
            </li>
            <li className="flex gap-2 justify-center mb-3">
              <Instagram size={16} color="#FFFFFF" />
              <a href="#" className="text-sm">@TokenTrove</a>
            </li>
            <li className="flex gap-2 justify-center mb-3">
              <Twitter size={16} color="#FFFFFF" />
              <a href="#" className="text-sm">@TokenTrove</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}
