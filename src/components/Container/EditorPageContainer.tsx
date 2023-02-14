import EditorTitleBar from "@/components/Banner/EditorTitlebar";
import { getFileById } from "@/store/slices/fileSlice";
import { useSelector } from "react-redux";
import DesktopSidebar from "../Sidebar/DesktopSidebar";
import FileTitlebarSkeleton from "../Skeleton/FileTitlebarSkeleton";
import EditorContainer from "./EditorContainer";

interface EditorMainContainerProps {
  id?: string | string[];
}

function EditorPageContainer({ id }: EditorMainContainerProps): JSX.Element {
  const file = useSelector(getFileById(id));
  return (
    <div className="relative mx-auto max-w-[1440px] w-full h-full overflow-x-hidden">
      {!file ? <FileTitlebarSkeleton /> : <EditorTitleBar />}
      <div className="relative flex flex-row items-start w-full">
        <DesktopSidebar />
        <EditorContainer />
      </div>
    </div>
  );
}

export default EditorPageContainer;
