import EditorTitleBar from "@/components/Banner/EditorTitlebar";
import SectionSidebar from "@/components/Sidebar/SectionSidebar";
import EditorContainer from "./EditorContainer";
import PreviewContainer from "./PreviewContainer";

function EditorPageContainer(): JSX.Element {
  return (
    <div className="relative mx-auto max-w-[1440px] w-full h-full overflow-x-hidden">
      <EditorTitleBar />
      <div className="relative flex flex-col md:flex-row items-center md:items-start w-full">
        <SectionSidebar />
        <EditorContainer />
        <PreviewContainer />
      </div>
    </div>
  );
}

export default EditorPageContainer;
