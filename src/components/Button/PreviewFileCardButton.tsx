import Link from "next/link";

interface PropsForPreviewButton {
  path: string;
}

function PreviewFileCardButton({ path }: PropsForPreviewButton): JSX.Element {
  return (
    <Link
      href={path}
      className="px-3 py-1 w-full text-center text-[#0a0a0a] hover:text-[#f1f1f1] bg-[#f1f1f1] hover:bg-[#0a0a0a] border border-solid border-[#0a0a0a] hover:border-[#f1f1f1] rounded-lg overflow-hidden"
      aria-label="Preview File"
    >
      <span className="ml-1 text-sm text-center text-current font-medium tracking-wide">
        Preview
      </span>
    </Link>
  );
}

export default PreviewFileCardButton;
