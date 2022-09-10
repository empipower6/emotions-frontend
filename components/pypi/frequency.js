import { useEffect, useState } from "react";
import styles from "../../styles/_components.module.scss";
const Frequency = ({ frequencyData }) => {
  const [data, setData] = useState(frequencyData);
  useEffect(() => {
    if (frequencyData) {
      setData(frequencyData);
    }
  }, [frequencyData]);
  return (
    <div className={`${styles.frequencies} ${styles.results}`}>
      <h2> Results</h2>
      {data
        ? Object.keys(data).map((item, index) => (
            <div
              className={styles.frequenciesItem}
              key={`frequenciesItem-${index}`}
            >
              <h3>{item} - &nbsp;</h3>
              <p>{Math.round(Number(data[item]) * 100)}%</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Frequency;
