import styles from "../styles/_components.module.scss";
const GunterWords = ({ data }) => {
  console.log(data);
  return (
    <div className={`${styles.frequencies} ${styles.results}`}>
      <h2> Gunter Results</h2>
      <p>
        <strong>POSITIVE</strong>: {data["POSITIVE"]}%
      </p>
      <p>
        <strong>NEGATIVE</strong>: {data["NEGATIVE"]}%
      </p>
      <p>
        <strong>ANGER</strong>: {data["ANGER"]}%
      </p>
      <p>
        <strong>ANTICIPATION</strong>: {data["ANTICIPATION"]}%
      </p>
      <p>
        <strong>DISGUST</strong>: {data["DISGUST"]}%
      </p>
      <p>
        <strong>FEAR</strong>: {data["FEAR"]}%
      </p>
      <p>
        <strong>JOY</strong>: {data["JOY"]}%
      </p>
      <p>
        <strong>SADNESS</strong>: {data["SADNESS"]}%
      </p>
      <p>
        <strong>SURPRISE</strong>: {data["SURPRISE"]}%
      </p>
      <p>
        <strong>TRUST</strong>: {data["TRUST"]}%
      </p>
    </div>
  );
};

export default GunterWords;
