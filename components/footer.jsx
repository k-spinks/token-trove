import Image from "next/image";
import Link from "next/link";
import { Phone, Email, House, Facebook, Instagram, Twitter } from "@deemlol/next-icons";

export default function Footer () {
  return (
    <nav className="bg-blue-900 ">
      <div className="grid grid-cols-5 justify-between items-center w-4/5 m-auto">
        <div>
          <Link href={'/'}>
            <Image src={'/token_trove_logo.png'} alt="token trove logo" width={100} height={100} />
          </Link>
        </div>
        <div>
          <h3 className="footer-heading">Shop</h3>
          <ul>
            <li><Link href={'/boardgames'}>Board Games</Link></li>
            <li><Link href={'/cardgames'}>Card Games</Link></li>
            <li><Link href={'/accessories'}>Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Newsletter</h3>
          <p>Sign up for our newsletter!</p>
          <form>
            <label htmlFor="newsletter-email"></label>
            <input type="text" name="newsletter-email" placeholder="example@email.com" className="bg-gray-100 p-1 rounded-md focus:outline-0" />
          </form>
        </div>
        <div>
          <h3 className="footer-heading">Contact Us</h3>
          <ul>
            <li className="flex justify-between items-center">
              <Phone size={16} color="#FFFFFF" />
              <a href="tel:414-2322-2220">414-2322-2220</a>
            </li>
            <li className="flex justify-between items-center">
              <Email size={16} color="#FFFFFF" />
              <a href="mailto:TokenTrove@business.com">TokenTrove@business.com</a>
            </li>
            <li className="">
              <House size={16} color="#FFFFFF" />
              <a href="#" className="text-sm flex justify-between items-center">1234 N Meeple Blvd<br/>
                Milwaukee, WI 12345<br/>
                USA</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-heading">Social Media</h3>
          <ul>
            <li className="flex justify-between items-center">
              <Facebook size={24} color="#FFFFFF" />
              <a href="#">TokenTrove</a>
            </li>
            <li className="flex justify-between items-center">
              <Instagram size={24} color="#FFFFFF" />
              <a href="#">@TokenTrove</a>
              </li>
            <li className="flex justify-between items-center">
              <Twitter size={24} color="#FFFFFF" />
              <a href="#">@TokenTrove</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}