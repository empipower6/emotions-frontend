import { useEffect, useState } from "react";
import styles from "../../styles/_components.module.scss";
const High = ({ highData }) => {
  const [data, setData] = useState(highData);
  useEffect(() => {
    if (highData) {
      setData(highData);
    }
  }, [highData]);
  return (
    <div className={`${styles.highEmotions} ${styles.results}`}>
      <h2> Results</h2>
      {data
        ? data.map((item, index) => (
            <div className={styles.emotionItem} key={`emotionItem-${index}`}>
              <h3>{item[0]} - &nbsp;</h3>
              <p>{Math.round(Number(item[1]) * 100)}%</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default High;
