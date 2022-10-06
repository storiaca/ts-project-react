import { useState } from "react";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import bundle from "./bundler";

function App() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />

      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
}

export default App;
