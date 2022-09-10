import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ParallexBg.module.scss";
import PackageCard from "./PackageCard";
import ReactPlayer from "react-player";

const ParallexBg = () => {
  const [url, setUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setUrl("/images/tv-plus-bg.mp4");
    setIsPlaying(true);
  }, []);

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  if (typeof window !== "undefined") {
    var header = document.getElementById("title");
    function fadeOutOnScroll(element) {
      if (!element) {
        return;
      }
      var distanceToTop =
        window.pageYOffset + element.getBoundingClientRect().top;
      var elementHeight = element.offsetHeight + 400;
      var scrollTop = document.documentElement.scrollTop;
      var opacity = 1;

      if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      }

      if (opacity >= 0) {
        element.style.opacity = opacity;
      }
    }
    function scrollHandler() {
      fadeOutOnScroll(header);
    }
    window.addEventListener("scroll", scrollHandler);
  }
  return (
    <div>
      <div className={styles.fullScreen}>
        {url && (
          // <video
          //   style={{ maxWidth: "100%", width: "100%" }}
          //   playsInline
          //   autoPlay={true}
          //   auto
          //   loop
          //   controls
          //   alt="All the devices"
          //   src={url}
          //   ref={videoEl}
          // />

          <ReactPlayer
            className="react-player"
            url={url}
            controls
            playing={isPlaying}
            width="100%"
            height="100%"
            // light
            loop
            muted={true}
          />
        )}
      </div>

      <div className={styles.title}>
        <h1 id="title">All Apple Originals.</h1>
        <h1 id="title">Only on Apple TV+.</h1>
        <button>Stream Now</button>
      </div>

      <div className={styles.paragraph}>
        <p>New Apple Originals every month</p>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
        <p>Share Apple TV+ with your family.</p>
        <div className={styles.package}>
          <PackageCard
            title="Buy an Apple device"
            timePeriod="3 months free."
            description="Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.1"
            btnText="Check eligibility"
          />
          <PackageCard
            title="Free 7-day trial"
            timePeriod="$4.99/mo."
            description="A monthly subscription is just $4.99 per month after a free 7-day trial. Share Apple TV+ with your family.2"
            btnText="Try it free"
          />
          <PackageCard
            title="Free 1‑month trial"
            timePeriod="Apple One"
            description="Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less Learn More"
            btnText="Try Apple One free*"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallexBg;
