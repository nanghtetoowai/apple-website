import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.wrapper}>
    <p>
      * The Apple One free trial includes only services that you are not
      currently using through a free trial or a subscription. Plan automatically
      renews after trial until cancelled. Restrictions and other terms apply.
    </p>
    <ol>
      <li>
        $4.99/month after free trial. Only one offer per Apple ID and only one
        offer per family if you’re part of a Family Sharing group, regardless of
        the number of devices you or your family purchases. This offer is not
        available if you or your Family have previously accepted an Apple TV+
        one year free offer. Offer good for 3 months after eligible device
        activation. Plan automatically renews until cancelled. Restrictions and
        other terms apply.
      </li>
      <li>
        One subscription per Family Sharing group. Plan automatically renews
        until cancelled.
      </li>
      <li>
        Limited-time offer; offer may end at any time. Free Apple TV+ access for
        students ends when you no longer qualify or do not renew your Apple
        Music Student subscription. Offer good for verified college students
        only and does not extend to a Family Sharing group.
      </li>
    </ol>
    <p>
      Major League Baseball trademarks and copyrights are used with permission
      of MLB Advanced Media, L.P. All rights reserved.
    </p>
    <div className={styles.divider} />

    {/* links */}
    <div className={styles.linkSection}>
      <div>
        <h4>Shop and Learn</h4>
        <ul>
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
            <Link href="/airtag">AirTag</Link>
          </li>
          <li>
            <Link href="/accessories">Accessories</Link>
          </li>
          <li>
            <Link href="/giftCard">Gift Cards</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>
            <Link href="/store">Apple Music</Link>
          </li>
          <li>
            <Link href="/mac">Apple TV+</Link>
          </li>
          <li>
            <Link href="/ipad">Apple Fitness+</Link>
          </li>
          <li>
            <Link href="/iphone">Apple News+</Link>
          </li>
          <li>
            <Link href="/watch">Apple Arcade</Link>
          </li>
          <li>
            <Link href="/airpods">iCloud</Link>
          </li>
          <li>
            <Link href="/tv-home">Apple One</Link>
          </li>
          <li>
            <Link href="/airtag">Apple Card</Link>
          </li>
          <li>
            <Link href="/accessories">Apple Books</Link>
          </li>
          <li>
            <Link href="/giftCard">Apple Podcasts</Link>
          </li>
          <li>
            <Link href="/giftCard">Apple Store</Link>
          </li>
        </ul>
        <h4>Account</h4>
        <ul>
          <li>
            <Link href="/giftCard">Manage Your Apple ID</Link>
          </li>
          <li>
            <Link href="/giftCard">Apple Store Account</Link>
          </li>
          <li>
            <Link href="/giftCard">iCloud.com</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Apple Store</h4>
        <ul>
          <li>
            <Link href="/store">Find a Store</Link>
          </li>
          <li>
            <Link href="/mac">Genius Bar</Link>
          </li>
          <li>
            <Link href="/ipad">Today at Apple</Link>
          </li>
          <li>
            <Link href="/iphone">Apple Camp</Link>
          </li>
          <li>
            <Link href="/watch">Apple Store App</Link>
          </li>
          <li>
            <Link href="/airpods">Refurbished and Clearance</Link>
          </li>
          <li>
            <Link href="/tv-home">Financing</Link>
          </li>
          <li>
            <Link href="/airtag">Apple Treade In</Link>
          </li>
          <li>
            <Link href="/accessories">Order Status</Link>
          </li>
          <li>
            <Link href="/giftCard">Shopping Help</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>For Business</h4>
        <ul>
          <li>
            <Link href="/store">Apple and Business</Link>
          </li>
          <li>
            <Link href="/mac">Shop For Business</Link>
          </li>
        </ul>

        <h4>For Education</h4>
        <ul>
          <li>
            <Link href="/ipad">Apple and Education</Link>
          </li>
          <li>
            <Link href="/iphone">Shop for K-12</Link>
          </li>
          <li>
            <Link href="/watch">Shop For College</Link>
          </li>
        </ul>

        <h4>For Healthcare</h4>
        <ul>
          <li>
            <Link href="/airpods">Apple in Healthcare</Link>
          </li>
          <li>
            <Link href="/tv-home">Health on Apple Watch</Link>
          </li>
          <li>
            <Link href="/airtag">Health Records on iPhone</Link>
          </li>
        </ul>
        <h4>For Government</h4>
        <ul>
          <li>
            <Link href="/accessories">Shop for Government</Link>
          </li>
          <li>
            <Link href="/giftCard">Shop for Veterans and Military</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Apple Values</h4>
        <ul>
          <li>
            <Link href="/store">Accessibility</Link>
          </li>
          <li>
            <Link href="/mac">Education</Link>
          </li>
          <li>
            <Link href="/mac">Environment</Link>
          </li>
          <li>
            <Link href="/mac">Inclusion and Diversity</Link>
          </li>
          <li>
            <Link href="/mac">Privacy</Link>
          </li>
          <li>
            <Link href="/mac">Racial Equity and Justice</Link>
          </li>
          <li>
            <Link href="/mac">Supplier Responsibility</Link>
          </li>
        </ul>

        <h4>About Apple</h4>
        <ul>
          <li>
            <Link href="/airpods">Newsroom</Link>
          </li>
          <li>
            <Link href="/tv-home">Apple Leadership</Link>
          </li>
          <li>
            <Link href="/airtag">Career Opportunities</Link>
          </li>
          <li>
            <Link href="/airtag">Investors</Link>
          </li>
          <li>
            <Link href="/airtag">Ethics &amp; Compliance</Link>
          </li>
          <li>
            <Link href="/airtag">Events</Link>
          </li>
          <li>
            <Link href="/airtag">Contact Apple</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.copyRightGp}>
      <p>
        More ways to shop: Find an Apple Store or other retailer near you. Or
        call 1-800-MY-APPLE.
      </p>
      <div className={styles.divider} />
      <div className={styles.copyRight}>
        <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="/airpods">Privay Policy</Link>
            </li>
            <li>
              <Link href="/tv-home">Terms of Use</Link>
            </li>
            <li>
              <Link href="/airtag">Sales and Refunds</Link>
            </li>
            <li>
              <Link href="/airtag">Legal</Link>
            </li>
            <li>
              <Link href="/airtag">Site Map</Link>
            </li>
          </ul>
        </div>
        <p>United States</p>
      </div>
    </div>
  </div>
);

export default Footer;
