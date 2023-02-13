import { Trash } from "@/components/Icon";

function DeleteReadmeFileButton(): JSX.Element {
  return (
    <button className="px-2.5 py-1.5 flex items-center justify-center w-auto text-[#9e9fa3] hover:text-white">
      <Trash />
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Delete
      </span>
    </button>
  );
}

export default DeleteReadmeFileButton;
