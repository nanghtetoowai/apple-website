import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import styles from "./BundleApple.module.scss";

const BundleApple = () => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <div className={styles.col1}>
        <Image
          alt="bundle-apple"
          src="/images/bundle.jpg"
          width={600}
          height={430}
        />
      </div>
      <div className={styles.col2}>
        <h2>
          <span>
            <FaApple size={40} />
          </span>
          One
        </h2>
        <p>
          Bundle Apple TV+ with up to five other great services. And enjoy more
          for less.
        </p>
        <button>Try Apple One free*</button>
        <Link href="/" className={styles.link}>
          <a>Learn More</a>
        </Link>
      </div>
    </div>
  </div>
);

export default BundleApple;
