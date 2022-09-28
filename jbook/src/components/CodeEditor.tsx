import MonacoEditor from "@monaco-editor/react";
const CodeEditor = () => {
  return (
    <MonacoEditor
      theme="dark"
      language="javascript"
      height="500px"
      options={{
        wordWrap: "on",
      }}
      // need to setup editor for js
    />
  );
};

export default CodeEditor;
