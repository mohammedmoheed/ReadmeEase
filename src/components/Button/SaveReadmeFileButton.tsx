import { BookmarkSquare } from "@/components/Icon";

function SaveReadmeFileButton(): JSX.Element {
  return (
    <button className="px-2.5 py-1.5 flex items-center justify-center w-auto text-white bg-[#e56643] hover:bg-[#df552f] rounded-lg">
      <BookmarkSquare />
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Save
      </span>
    </button>
  );
}

export default SaveReadmeFileButton;
