import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "45%", height: "98%", padding: "10px" }}>
        <textarea value={inputText} onChange={handleInputChange} style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ width: "45%", height: "98%", padding: "10px" }}>
        <ReactMarkdown>{inputText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default App;
