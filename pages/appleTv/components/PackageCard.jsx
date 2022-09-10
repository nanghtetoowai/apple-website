import React from "react";
import styles from './PackageCard.module.scss';

const PackageCard = ({ title, timePeriod, description, btnText }) => (
  <div className={styles.card}>
    <h4>{title}</h4>
    <p className={styles.timePeriod}>{timePeriod}</p>
    <p>{description}</p>
    <button>{btnText}</button>
  </div>
);

export default PackageCard;
