import { Plus } from "@/components/Icon";
import { createNewFile } from "@/store/slices/fileSlice";
import { useDispatch } from "react-redux";

function CreateReadmeFileButton() {
  const dispatch = useDispatch();
  // create a new readme file
  function handleCreateNewFile() {
    // dispatch function by calling 'createNewFile'
    // that creates new file
    dispatch(createNewFile());
  }

  return (
    <button
      className="px-4 py-2 flex items-center justify-center w-auto bg-[#0a0a0a] hover:bg-[#010101] text-[#c9d1d9] hover:text-white focus-within:text-white border-2 border-solid border-[#333] rounded-lg"
      onClick={handleCreateNewFile}
      aria-label="Create new readme file"
      title="Create New Readme"
    >
      <Plus />
      <span className="ml-1 text-sm text-center text-current font-normal tracking-wide">
        Create New File
      </span>
    </button>
  );
}

export default CreateReadmeFileButton;
