import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const inputRefs = useRef();

  const handleInput = (e) => {
    e.preventDefault();
    const text = inputRefs.current.value;
    setWordCount(text.split(" ").length);
    setCharCount(text.length);
  };

  return (
    <div className="App">
      <h1>Word Count</h1>
      <textarea ref={inputRefs} onChange={handleInput} />
      <br />

      <div> total words : {wordCount}</div>
      <div> total Character : {charCount}</div>
    </div>
  );
}
