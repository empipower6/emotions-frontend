import { useEffect, useState } from "react";
import List from "./list";
import Dictionary from "./dictionary";
import RawCount from "./rawCount";
import High from "./high";
import Frequency from "./frequency";
import GunterWords from "./gunterWords";

const Result = ({ num, data }) => {
  const [toggle, setToggle] = useState(-1);
  useEffect(() => {
    console.log(num);
    setToggle(num);
  }, [num]);

  return (
    <>
      {toggle === 0 || toggle === 1 ? (
        <List listData={data[toggle]} />
      ) : toggle === 2 ? (
        <Dictionary dictData={data[toggle]} />
      ) : toggle === 3 ? (
        <RawCount countData={data[toggle]} />
      ) : toggle === 4 ? (
        <High highData={data[toggle]} />
      ) : toggle === 5 ? (
        <Frequency frequencyData={data[toggle]} />
      ) : toggle === 6 ? (
        <GunterWords data={data} />
      ) : (
        ""
      )}
    </>
  );
};

export default Result;
