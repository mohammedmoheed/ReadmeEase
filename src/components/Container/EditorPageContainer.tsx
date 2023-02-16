import { FileItem, getFileById } from "@/store/slices/fileSlice";
import { useSelector } from "react-redux";
import EditorPageFileNotExist from "../Skeleton/EditorPageFileNotExist";
import { EditorContainer } from "./index";

function EditorPageContainer({ id }: { id: string | string[] }): JSX.Element {
  const file: FileItem = useSelector(getFileById(id));

  return (
    <div className="relative mx-auto max-w-[1440px] w-full h-full overflow-x-hidden">
      {!file ? (
        <EditorPageFileNotExist />
      ) : (
        <EditorContainer
          id={file.id}
          defaultValue={file.body}
          fileName={file.title}
        />
      )}
    </div>
  );
}

export default EditorPageContainer;
