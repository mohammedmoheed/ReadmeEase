import { EditorTitleBar } from "@/components/Banner";
import SectionSidebar from "@/components/Sidebar/SectionSidebar";
import { getFileById } from "@/store/slices/fileSlice";
import { useSelector } from "react-redux";
import EditorPageFileNotExist from "../Skeleton/EditorPageFileNotExist";
import { EditorContainer, PreviewContainer } from "./index";

function EditorPageContainer({ id }: { id: string | string[] }): JSX.Element {
  const file = useSelector(getFileById(id));

  return (
    <div className="relative mx-auto max-w-[1440px] w-full h-full overflow-x-hidden">
      {!file ? (
        <EditorPageFileNotExist />
      ) : (
        <>
          <EditorTitleBar />
          <div className="relative flex flex-col md:flex-row items-center md:items-start w-full">
            <SectionSidebar />
            <EditorContainer />
            <PreviewContainer />
          </div>
        </>
      )}
    </div>
  );
}

export default EditorPageContainer;
