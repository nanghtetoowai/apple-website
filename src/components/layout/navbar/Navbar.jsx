import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { FaApple, FaChevronRight, FaSearch, FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  if (typeof window !== "undefined") {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("infobar").style.top = "126px";
      } else {
        document.getElementById("navbar").style.top = "-55px";
        document.getElementById("infobar").style.top = "-55px";
      }
      prevScrollpos = currentScrollPos;
    };
  }

  return (
    <div>
      <div className={styles.wrapper} id="navbar">
        <ul>
          <li>
            <Link href="/">
              <FaApple size={20} />
            </Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/mac">Mac</Link>
          </li>
          <li>
            <Link href="/ipad">iPad</Link>
          </li>
          <li>
            <Link href="/iphone">iPhone</Link>
          </li>
          <li>
            <Link href="/watch">Watch</Link>
          </li>
          <li>
            <Link href="/airpods">AirPods</Link>
          </li>
          <li>
            <Link href="/tv-home">TV &amp; Home</Link>
          </li>
          <li>
            <Link href="/onApple">Only on Apple</Link>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/support">
              <FaSearch size={20} />
            </Link>
          </li>
          <li>
            <Link href="/support">
              <FaShoppingBag size={20} />
            </Link>
          </li>
        </ul>
        <div className={styles.activeNav}>
          <h2>Apple TV+</h2>
          <button>Stream Now</button>
        </div>
        <div className={styles.divider} />
        <div className={styles.infoBar} id="infobar">
          <p>
            Friday Night Baseball, now streaming on Apple TV+.&nbsp;
            <span>
              <a>
                Learn more
                <span>
                  <FaChevronRight />
                </span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
