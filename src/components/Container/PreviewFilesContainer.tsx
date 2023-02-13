import FilePreviewCard from "@/components/Card/FilePreviewCard";
import { getUserFiles } from "@/store/slices/fileSlice";
import { useSelector } from "react-redux";

interface FileItem {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

function PreviewFilesContainer(): JSX.Element {
  const files: Array<FileItem> = useSelector(getUserFiles);
  return (
    <>
      <div className="flex flex-row items-start justify-center gap-4 flex-wrap w-full">
        {files.length === 0 ? (
          <p className="text-2xl text-[#c9c9c9] text-center font-medium tracking-wide">
            Readme files are not available.{" "}
            <span className="text-white underline">Create</span> a new one.
          </p>
        ) : (
          files.map((file) => (
            <FilePreviewCard
              key={file.id}
              id={file.id}
              title={file.title}
              createdAt={file.createdAt}
              updatedAt={file.updatedAt}
            />
          ))
        )}
      </div>
    </>
  );
}

export default PreviewFilesContainer;
