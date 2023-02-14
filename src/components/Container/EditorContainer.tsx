import Editor from "@monaco-editor/react";
import { useState } from "react";

function EditorContainer(): JSX.Element {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>(
    "// Add some comment"
  );
  function handleOnChange(val: any) {
    setMarkdownValue(val);
  }

  return (
    <div className="relative flex flex-col items-start justify-start flex-[50%_320px_auto] w-full md:w-1/2 min-h-[calc(100vh-110px)] h-full">
      <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-solid border-[#333]">
        <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
          MARKDOWN
        </h2>
      </div>
      <Editor
        className="min-h-[calc(100vh-155px)]"
        theme="vs-dark"
        onChange={handleOnChange}
        loading={
          <div className="animate-pulse block min-h-[calc(100vh-110px)] h-full w-full bg-[#111]"></div>
        }
        value={markdownValue}
        defaultLanguage="markdown"
        defaultValue={markdownValue}
        aria-label="Markdown Editor"
      />
    </div>
  );
}

export default EditorContainer;
