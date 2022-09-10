import Head from "next/head";
import styles from "../styles/_home.module.scss";
import { useEffect, useState, useRef } from "react";
import PYPISection from "../components/pypi/PYPISection";
import GunterSection from "../components/gunter/gunterSection";
export default function Home() {
  const [text, setText] = useState("");
  const [pypiData, setPypiData] = useState({
    error: "",
    tech: -1,
    results: [],
  });
  const [gunterData, setGunterData] = useState({ error: "", results: [] });

  useEffect(() => {
    const localData = localStorage.getItem("emotionText")
      ? localStorage.getItem("emotionText")
      : "";
    if (localData) {
      setText(localData);
    }
    // fetch("./resources/words.json")
    //   .then((data) => data.json())
    //   .then((jsonData) => console.log(jsonData));
  }, []);
  const updateLocalStorage = () => {
    localStorage.setItem("emotionText", text);
  };

  const clearAll = () => {
    setLeft({ error: "", tech: -1, results: [] });
    setText("");
  };
  const updateText = (e) => {
    setText(e.target.value);
    updateLocalStorage();
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
        <div className={styles.textSettings}>
          <label htmlFor="w3review">
            Write down the text you want to analyze.
          </label>
          <button className={styles.clearButton} onClick={() => clearAll()}>
            Clear All
          </button>
        </div>
        <textarea
          id="w3review"
          name="w3review"
          className={styles.textarea}
          value={text}
          onChange={(e) => updateText(e)}
        ></textarea>
        <div className={styles.sections}>
          <section className={styles.smallSection}>
            <PYPISection text={text} data={pypiData} setData={setPypiData} />
          </section>
          <section className={`${styles.smallSection} ${styles.midLine}`}>
            {/* <GunterSection
              text={text}
              data={gunterData}
              setData={setGunterData}
            /> */}
          </section>
        </div>
      </div>
    </div>
  );
}
