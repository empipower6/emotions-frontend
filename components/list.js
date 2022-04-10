import { useEffect, useState } from "react";
import styles from "../styles/_components.module.scss";
const List = ({ listData }) => {
  const [data, setData] = useState(listData);

  useEffect(() => {
    if (listData) {
      setData(listData);
    }
  }, [listData]);
  return (
    <div className={`${styles.list} ${styles.results}`}>
      <h2> Results</h2>
      {data
        ? data.map((listItem, index) => (
            <div className={styles.listItem} key={`listItem-${index}`}>
              <p>{listItem}</p>
              <hr />
            </div>
          ))
        : ""}
    </div>
  );
};

export default List;
