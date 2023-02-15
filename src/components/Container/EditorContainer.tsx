import {
  getFocusedSectionData,
  SectionDataItem,
  updateSelectedSlugBody,
} from "@/store/slices/sectionSlice";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditorContainer(): JSX.Element {
  const data: SectionDataItem = useSelector(getFocusedSectionData);
  const dispatch = useDispatch();
  const [markdownValue, setMarkdownValue] = useState<string | undefined>(
    data.body || ""
  );

  useEffect(() => {
    setMarkdownValue(data.body);
  }, [data]);

  function handleOnChange(val: any) {
    setMarkdownValue(val);
    dispatch(updateSelectedSlugBody({ id: data.id, body: val }));
  }

  return (
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
        options={{
          fontSize: 16,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

export default EditorContainer;
