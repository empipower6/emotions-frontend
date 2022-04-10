import styles from "../styles/_components.module.scss";
import { useState, useEffect } from "react";
const Dictionary = ({ dictData }) => {
  const [data, setData] = useState(dictData);
  useEffect(() => {
    if (dictData) {
      setData(dictData);
    }
  }, [dictData]);
  return (
    <div className={`${styles.dictionary} ${styles.results}`}>
      <h2>Results</h2>
      {data
        ? Object.keys(data).map((item, index) => (
            <div
              className={styles.dictionaryItem}
              key={`dictionaryItem-${index}`}
            >
              <h3>{item} - &nbsp;</h3>
              <div className={styles.dictionaryItemEmotions}>
                {data[item].map((emotion, emotionIndex) => (
                  <p key={`dictionaryItemEmotion${index}-${emotionIndex}`}>
                    {emotion}
                    {data[item].length === emotionIndex + 1 ? "" : ","}&nbsp;
                  </p>
                ))}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Dictionary;
