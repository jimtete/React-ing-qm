import Output from "./Output";
import { useState } from "react";

export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see ya.</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};
