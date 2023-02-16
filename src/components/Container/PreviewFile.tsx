import { Clock, Page } from "@/components/Icon";
import { FileItem, getFileById } from "@/store/slices/fileSlice";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";
import EditorPageFileNotExist from "../Skeleton/EditorPageFileNotExist";

function PreviewFile({ id }: { id: string | string[] }): JSX.Element {
  const file: FileItem = useSelector(getFileById(id));
  return (
    <div className="relative mx-auto max-w-[1440px] w-full h-full overflow-x-hidden">
      {!file ? (
        <EditorPageFileNotExist />
      ) : (
        <>
          <nav className="flex items-center justify-start w-full bg-[#111] border-b border-solid border-b-[#333]">
            <div className="px-4 py-2 flex items-center justify-between w-auto flex-auto h-auto">
              <div className="flex flex-row items-center justify-center w-auto h-full">
                <Page />
                <div className="ml-2 flex flex-col items-start justify-center w-auto h-full">
                  <span className="text-xs text-center text-[#9e9fa3] font-normal tracking-wide">
                    Document Name:
                  </span>
                  <p className="text-sm text-center text-white font-medium tracking-wide">
                    {file.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center w-auto h-full">
                <Clock />
                <div className="ml-2 flex flex-col items-start justify-center w-auto h-full">
                  <span className="text-xs text-center text-[#9e9fa3] font-normal tracking-wide">
                    Created At:
                  </span>
                  <p className="text-sm text-center text-white font-medium tracking-wide">
                    {new Date(file.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center w-auto h-full">
                <Clock />
                <div className="ml-2 flex flex-col items-start justify-center w-auto h-full">
                  <span className="text-xs text-center text-[#9e9fa3] font-normal tracking-wide">
                    Updated At:
                  </span>
                  <p className="text-sm text-center text-white font-medium tracking-wide">
                    {new Date(file.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </nav>
          <div className="relative flex flex-col items-start justify-start w-full h-auto overflow-y-hidden">
            <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-solid border-[#333]">
              <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
                PREVIEW
              </h2>
            </div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="preview p-4 min-h-[calc(100vh-151px)] max-h-[calc(100vh-151px)] h-full w-full bg-[#0d1117] overflow-y-auto"
            >
              {file.body}
            </ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
}

export default PreviewFile;
