import { BookmarkSquare } from "@/components/Icon";
import { updateFileBody } from "@/store/slices/fileSlice";
import { useDispatch } from "react-redux";

function SaveReadmeFileButton({
  id,
  body,
}: {
  id: string | string[];
  body: string;
}): JSX.Element {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(updateFileBody({ id: id, body: body }))}
      className="px-2.5 py-1.5 flex items-center justify-center w-auto text-white bg-[#e56643] hover:bg-[#df552f] rounded-lg"
    >
      <BookmarkSquare />
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Save
      </span>
    </button>
  );
}

export default SaveReadmeFileButton;
