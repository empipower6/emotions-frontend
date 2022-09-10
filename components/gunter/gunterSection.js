import { useEffect, useState } from "react";
import styles from "../../styles/_home.module.scss";

const GunterSection = ({ text, data, setData }) => {
  const analyze = () => {};
  return (
    <>
      <div className={styles.buttons}>
        <button onClick={() => analyze()}>Gunter Words</button>
      </div>
    </>
  );
};

export default GunterSection;
