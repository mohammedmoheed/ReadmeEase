import { Page } from "@/components/Icon";
import {
  DeleteReadmeFileButton,
  SaveReadmeFileButton,
} from "@/components/Button";

function EditorTitlebar({
  id,
  fileName,
  body,
}: {
  id: string | string[];
  fileName: string;
  body: string;
}): JSX.Element {
  return (
    <nav className="flex items-center justify-start w-full bg-[#111] border-b border-solid border-b-[#333]">
      <div className="px-4 py-2 flex items-center justify-between w-auto flex-auto h-auto">
        <div className="flex flex-row items-center justify-center w-auto h-full">
          <Page />
          <div className="ml-2 flex flex-col items-start justify-center w-auto h-full">
            <span className="text-xs text-center text-[#9e9fa3] font-normal tracking-wide">
              Document Name:
            </span>
            <p className="text-sm text-center text-white font-medium tracking-wide">
              {fileName}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 w-auto">
          <DeleteReadmeFileButton id={id} />
          <SaveReadmeFileButton id={id} body={body} />
        </div>
      </div>
    </nav>
  );
}

export default EditorTitlebar;
