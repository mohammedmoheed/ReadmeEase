import { getSectionBodyData } from "@/store/slices/sectionSlice";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";

function PreviewContainer(): JSX.Element {
  const dataForPreview = useSelector(getSectionBodyData);

  return (
    <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden">
      <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-solid border-[#333]">
        <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
          PREVIEW
        </h2>
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="preview p-4 min-h-[calc(100vh-151px)] max-h-[calc(100vh-151px)] h-full w-full bg-[#0d1117] overflow-y-auto"
      >
        {dataForPreview.join("\r\n\n")}
      </ReactMarkdown>
    </div>
  );
}

export default PreviewContainer;
