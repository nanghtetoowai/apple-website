import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./LastRow.module.scss";

const LastRow = () => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <div className={styles.col1}>
        <Image
          alt="apple_tv_4k_logo"
          src="/images/apple_tv_4k_logo.png"
          width={116}
          height={35}
          className={styles.img1}
        />
        <p>A higher definition of TV.</p>
        <div className={styles.btnGroup}>
          <button>Buy</button>
          <div className={styles.link}>
            <Link href="/">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <Image
          alt="apple_tv_4k_remote"
          src="/images/apple_tv_4k_remote.jpg"
          width={539}
          height={532}
        />
      </div>
      <div className={styles.col2}>
        <h3>AirPlay</h3>
        <p>Bring Apple TV+ to a screen near you.</p>
        <div className={styles.link}>
          <Link href="/">
            <a>Learn More</a>
          </Link>
        </div>
        <Image
          alt="air_play"
          src="/images/air_play.jpg"
          width={539}
          height={532}
        />
      </div>
    </div>
  </div>
);

export default LastRow;
