import Link from "next/link";

function EditorPageFileNotExist(): JSX.Element {
  return (
    <div className="relative w-full h-auto">
      <div className="flex items-center justify-start w-full bg-[#111] border-b border-solid border-[#333]">
        <div className="py-2 px-3 flex items-center justify-between w-full">
          <div className="animte-pulse inline-block py-3 w-48 bg-[#222] rounded"></div>
          <div className="flex items-center justify-center gap-x-2 w-auto">
            <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
            <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-154px)] h-full">
        <div className="max-w-md w-full">
          <h3 className="text-3xl text-center text-white font-semibold tracking-wide">
            404-File Not Found
          </h3>
          <p className="mt-4 text-sm text-center text-[#696969] font-normal tracking-wide">
            You&#39;re trying to access or find the file that does not exist. Go to{" "}
            <Link href="/files" aria-label="Files page" className="text-[#f1f1f1] no-underline hover:underline">
              Files
            </Link>{" "}
            page to create a new file.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditorPageFileNotExist;
