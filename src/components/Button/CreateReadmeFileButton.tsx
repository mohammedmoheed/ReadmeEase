import { Plus } from "@/components/Icon";

function CreateReadmeFileButton() {
  return (
    <button
      className="px-4 py-2 flex items-center justify-center w-auto bg-[#0a0a0a] hover:bg-[#010101] text-[#c9d1d9] hover:text-white focus-within:text-white border-2 border-solid border-[#333] rounded-lg"
      aria-label="Create new readme file"
      title="Create New Readme"
    >
      <Plus />
      <span className="text-sm text-center text-current font-normal tracking-wide">
        Add New File
      </span>
    </button>
  );
}

export default CreateReadmeFileButton;
