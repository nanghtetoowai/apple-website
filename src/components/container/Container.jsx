import React from "react";
import styles from "./Container.module.scss";

const Container = ({ childern }) => (
  <div className={styles.wrapper}>{childern}</div>
);

export default Container;
