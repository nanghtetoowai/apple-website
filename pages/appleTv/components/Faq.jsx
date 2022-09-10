import Link from "next/link";
import React, { useState } from "react";
import styles from "./Faq.module.scss";

const Faq = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);

  return (
    <div className={styles.wrapper}>
      <h1>Questions? Answers.</h1>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive1(!isActive1)}>
          What is Apple TV+?
        </button>
        {isActive1 && (
          <p className={styles.content}>
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month.
          </p>
        )}
        <div className={styles.divider} />
      </div>

      <div className={styles.accordion}>
        <button onClick={() => setIsActive2(!isActive2)}>
          How can I watch it?
        </button>
        {isActive2 && (
          <p className={styles.content}>
            Watch Apple TV+ on the Apple TV app, which is already on your
            favorite Apple devices. Just open the app, click or tap Apple TV+,
            and enjoy the shows and movies. You can also watch Apple TV+ on
            streaming platforms, popular smart TVs, and AirPlay-enabled TVs with
            the Apple TV app — or watch online at tv.apple.com.
          </p>
        )}
        <div className={styles.divider} />
      </div>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive3(!isActive3)}>
          What does it cost?
        </button>
        {isActive3 && (
          <p className={styles.content}>
            That all depends on which offer you choose. (1) If you buy an Apple
            device, Apple TV+ is included free for 3 months.1 (2) A monthly
            subscription is just $4.99 per month after a free seven-day trial.2
            (3) Apple TV+ is included in Apple One, which bundles up to five
            other Apple services into a single monthly subscription. Apple One
            plans start at $14.95 per month. (4) The Apple Music Student Plan
            comes with a free subscription to Apple TV+.3 Friday Night Baseball
            is free for a limited time — an Apple TV+ subscription is not
            required.
          </p>
        )}
        <div className={styles.divider} />
      </div>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive4(!isActive4)}>
          Can I share with my family?
        </button>
        {isActive4 && (
          <p className={styles.content}>
            Of course. Apple TV+ lets you share your subscription with up to
            five family members.
          </p>
        )}
        <div className={styles.divider} />
      </div>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive5(!isActive5)}>
          Are there commercials? And can I watch on demand?
        </button>
        {isActive5 && (
          <p className={styles.content}>
            Apple Originals are always commercial-free. Some shows release all
            episodes at once. Other shows add new episodes every Friday. You can
            then watch them on demand anytime, anywhere. Friday Night Baseball
            may include commercials depending on location or region.
          </p>
        )}
        <div className={styles.divider} />
      </div>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive6(!isActive6)}>
          Do I need an Apple TV 4K?
        </button>
        {isActive6 && (
          <p className={styles.content}>
            No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound
            — is the ultimate way to experience Apple TV+, the original shows
            and movies on Apple TV+ are always available on the Apple TV app on
            your favorite devices.
            <Link href="/">See all supported devices</Link>
          </p>
        )}
        <div className={styles.divider} />
      </div>
      <div className={styles.accordion}>
        <button onClick={() => setIsActive7(!isActive7)}>
          Can I download to watch offline?
        </button>
        {isActive7 && (
          <p className={styles.content}>
            Absolutely. Download your favorite Apple Originals to your Apple
            device and watch them anywhere, anytime without a Wi-Fi connection.
          </p>
        )}
      </div>
    </div>
  );
};

export default Faq;
