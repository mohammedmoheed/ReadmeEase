import Editor from "@monaco-editor/react";
import { useState } from "react";
import PreviewContainer from "./PreviewContainer";

function EditorContainer(): JSX.Element {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>(
    "// Add some comment"
  );
  function handleOnChange(val: any) {
    setMarkdownValue(val);
  }

  return (
    <>
      <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden">
        <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-r border-solid border-b-[#333] border-r-[#333]">
          <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
            MARKDOWN
          </h2>
        </div>
        <Editor
          className="min-h-[calc(100vh-151px)] max-h-[calc(100vh-151px)] h-full overflow-x-hidden"
          theme="vs-dark"
          onChange={handleOnChange}
          loading={
            <div className="animate-pulse block min-h-[calc(100vh-151px)] max-h-[calc(100vh-151px)] h-full w-full bg-[#111]"></div>
          }
          value={markdownValue}
          language="markdown"
          aria-label="Markdown Editor"
        />
      </div>
      <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden">
        <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-solid border-[#333]">
          <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
            PREVIEW
          </h2>
        </div>
        <PreviewContainer body={markdownValue || ""} />
      </div>
    </>
  );
}

export default EditorContainer;
