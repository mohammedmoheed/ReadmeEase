import Link from "next/link";

interface PropsForEditButton {
  path: string;
}

function EditFileCardButton({ path }: PropsForEditButton): JSX.Element {
  return (
    <Link
      href={path}
      className="px-3 py-1 w-full text-center text-[#f1f1f1] hover:text-[#242526] bg-[#242526] hover:bg-[#f1f1f1] border border-solid border-[#f1f1f1] hover:border-[#242526] rounded-lg overflow-hidden"
      aria-label="Preview File"
    >
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Edit
      </span>
    </Link>
  );
}

export default EditFileCardButton;
