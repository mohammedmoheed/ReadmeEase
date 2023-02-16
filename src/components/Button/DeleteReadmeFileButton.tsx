import { Trash } from "@/components/Icon";
import { deleteFileById } from "@/store/slices/fileSlice";
import { useDispatch } from "react-redux";

function DeleteReadmeFileButton({
  id,
}: {
  id: string | string[];
}): JSX.Element {
  const dispatch = useDispatch();

  function handleDeleteFile() {
    dispatch(deleteFileById(id));
  }
  return (
    <button
      onClick={handleDeleteFile}
      className="px-2.5 py-1.5 flex items-center justify-center w-auto text-[#9e9fa3] hover:text-white"
    >
      <Trash />
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Delete
      </span>
    </button>
  );
}

export default DeleteReadmeFileButton;
