import { useEffect, useState } from "react";
import Results from "./results";
import styles from "../../styles/_home.module.scss";

const PYPISection = ({ text, data, setData }) => {
  //   const [tech, setTech] = useState(-1);
  //   const [results, setResults] = useState([]);

  const analyze = (tech) => {
    if (text) {
      fetch("https://emotions-backend.herokuapp.com/api/analyze", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ technique: tech, textAnalyze: String(text) }),
      })
        .then((res) => {
          return res.status === 200
            ? res.json()
            : setErrors("Something went wrong.");
        })
        .then((info) => {
          const newResults = [];
          let num = 0;
          if (tech === "wordList") {
            num = 0;
          } else if (tech === "affectList") {
            num = 1;
          } else if (tech === "affectDictionary") {
            num = 2;
          } else if (tech === "emotionalCount") {
            num = 3;
          } else if (tech === "highestEmotion") {
            num = 4;
          } else if (tech === "affectFrequencies") {
            num = 5;
          }
          newResults[num] = info.results;
          setData({ error: "", tech: num, results: [...newResults] });
        });
    } else {
      setData({
        errors: "Input some text",
        ...data,
      });
    }
  };
  return (
    <>
      <div className={styles.buttons}>
        <button onClick={() => analyze("wordList")}>Words List</button>
        <button onClick={() => analyze("affectList")}>Affect List</button>
        <button onClick={() => analyze("affectDictionary")}>
          Affect Dictionary
        </button>
        <button onClick={() => analyze("emotionalCount")}>
          Raw Emotional Counts
        </button>
        <button onClick={() => analyze("highestEmotion")}>
          Highest Emotions
        </button>
        <button onClick={() => analyze("affectFrequencies")}>
          Affect Frequencies
        </button>
      </div>
      {data.tech > -1 ? <Results num={data.tech} data={data.results} /> : ""}
      {data.errors ? <p>{data.errors}</p> : ""}
    </>
  );
};

export default PYPISection;
