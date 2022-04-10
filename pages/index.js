import Head from "next/head";
import styles from "../styles/_home.module.scss";
import { useEffect, useState } from "react";
import Results from "../components/results";

export default function Home() {
  const [text, setText] = useState("");
  const [tech, setTech] = useState(-1);
  const [results, setResults] = useState([]);

  const [errors, setErrors] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("emotionText")
      ? localStorage.getItem("emotionText")
      : "";
    if (localData) {
      setText(localData);
    }
  }, []);
  const updateLocalStorage = () => {
    localStorage.setItem("emotionText", text);
  };

  const clearAll = () => {
    setTech(-1);
    setResults([]);
    setText("");
    setErrors("");
  };
  const updateText = (e) => {
    setText(e.target.value);
    setErrors("");
  };
  const analyze = (tech) => {
    if (text) {
      updateLocalStorage();
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
        .then((data) => {
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
          newResults[num] = data.results;
          setResults(newResults);
          setTech(num);
        });
    } else {
      setErrors("Input some text");
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Emotion Analysis</title>
        <meta
          name="description"
          content="A tool to use to analyze the highest emotions in a given text."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Emotion Analysis" />
        <meta
          property="og:description"
          content="A tool to use to analyze the highest emotions in a given text."
        />
        <meta property="og:type" content="Analysis Tool" />

        {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}

        {/* <meta property="og:url" content="PERMALINK" /> */}

        <meta property="og:site_name" content="Emotional Analysis" />
      </Head>
      <h1 className={styles.title}>Emotion Analysis</h1>
      <div className={styles.textInputDiv}>
        <label htmlFor="w3review">
          Write down the text you want to analyze.
        </label>
        <textarea
          id="w3review"
          name="w3review"
          className={styles.textarea}
          value={text}
          onChange={(e) => updateText(e)}
        ></textarea>
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
          <button onClick={() => clearAll()}>Clear All</button>
        </div>
      </div>
      {tech > -1 ? <Results num={tech} data={results} /> : ""}
      {errors ? <p>{errors}</p> : ""}
    </div>
  );
}
