import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";

function App() {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "./esbuild.wasm",
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    if (!ref.current) {
      return;
    }

    console.log(ref.current);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre></pre>
    </div>
  );
}

export default App;
