import { useEffect, useState } from "react";
import styles from "../styles/_components.module.scss";
const RawCount = ({ countData }) => {
  const [data, setData] = useState(countData);
  useEffect(() => {
    if (countData) {
      setData(countData);
    }
  }, [countData]);
  return (
    <div className={`${styles.rawCount} ${styles.results}`}>
      <h2> Results</h2>
      {data
        ? Object.keys(data).map((rawItem, index) => (
            <div className={styles.rawItem} key={`rawItem-${index}`}>
              <h3>{rawItem} - &nbsp;</h3>
              <p>{data[rawItem]}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default RawCount;
