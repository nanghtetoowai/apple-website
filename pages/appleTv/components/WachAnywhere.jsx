import Image from "next/image";
import React from "react";
import styles from "./WatchAnywhere.module.scss";

const WachAnywhere = () => (
  <div className={styles.wrapper}>
    <div className={styles.watchApp}>
      <Image
        alt="image-apple-tv-app-icon"
        src="/images/apple_tv_app_icon.png"
        width={80}
        height={80}
        className={styles.image}
      />
      <h1>Watch Apple TV+ anywhere on the Apple TV app.</h1>
      <p>Find the Apple TV app on your favorite Apple devices.</p>
      <p>
        Or watch Apple TV+ online at <a>tv.apple.com.</a>
      </p>
    </div>
    <div className={styles.features}>
      <div>
        <Image
          alt="image-apple-tv-app-icon"
          src="/images/features/apple_tv_icon.jpg"
          width={70}
          height={70}
          className={styles.image}
        />
        <p>Apple TV</p>
      </div>

      <div>
        <Image
          alt="iphone_icon"
          src="/images/features/iphone_icon.jpg"
          width={70}
          height={70}
          className={styles.image}
        />
        <p>iPhone</p>
      </div>
      <div>
        <Image
          alt="ipad_icon"
          src="/images/features/ipad_icon.jpg"
          width={70}
          height={70}
          className={styles.image}
        />
        <p>iPad</p>
      </div>
      <div>
        <Image
          alt="mac_icon"
          src="/images/features/mac_icon.jpg"
          width={70}
          height={70}
          className={styles.image}
        />
        <p>Mac</p>
      </div>
      <div>
        <Image
          alt="airplay_icon"
          src="/images/features/airplay_icon.jpg"
          width={70}
          height={70}
          className={styles.image}
        />
        <p>AirPlay</p>
      </div>
    </div>
    <div className={styles.streamingDevices}>
      <h2> See it on your smart TV or streaming device.</h2>
      <a>Set up your device</a>
      <a>Explore compatible devices</a>
    </div>
    <div className={styles.devices}>
      <Image
        alt="samsung"
        src="/images/devices/samsung.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="lg"
        src="/images/devices/lg.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="vizio"
        src="/images/devices/vizio.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="sony"
        src="/images/devices/sony.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="xfinity"
        src="/images/devices/xfinity.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
    </div>
    <div className={styles.devices}>
      <Image
        alt="roku"
        src="/images/devices/roku.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="fireTv"
        src="/images/devices/fireTv.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="google"
        src="/images/devices/google.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="play-station"
        src="/images/devices/play-station.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
      <Image
        alt="xbox"
        src="/images/devices/xbox.jpg"
        width={130}
        height={100}
        className={styles.image}
      />
    </div>
  </div>
);

export default WachAnywhere;
