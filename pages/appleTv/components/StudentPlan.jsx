import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./StudentPlan.module.scss";

const StudentPlan = () => (
  <div>
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <p>The Apple Music Student Plan comes with Apple TV+ for free.3</p>
          <button>Try Apple Music free</button>
        </div>
        <div className={styles.col2}>
          <Image
            alt="bundle-apple"
            src="/images/student-plan.jpg"
            width={450}
            height={380}
          />
        </div>
      </div>
    </div>
  </div>
);

export default StudentPlan;
