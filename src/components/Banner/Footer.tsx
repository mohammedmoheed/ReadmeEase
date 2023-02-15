import Link from "next/link";

function Footer(): JSX.Element {
  return (
    <footer className="relative bottom-0 w-full bg-[#0a0a0a] border-t border-solid border-t-[#333]">
      <div className="mx-auto max-w-[1440px] w-full">
        <nav className="relative px-6 py-4 flex flex-row items-center justify-between w-full bg-transparent">
          <div className="flex items-center justify-center w-auto">
            <Link
              href="/"
              className="flex items-center justify-center"
              aria-label="ReadmeEase logo"
              title="ReadmeEase"
            >
              <span className="text-2xl text-center text-white font-medium tracking-wider">
                ReadmeEase
              </span>
            </Link>
          </div>
          <div className="w-auto">
            <p className="text-sm text-center tracking-wide">
              <span className="hidden md:inline font-normal text-[#c9d1d9]">
                Open-Source project released under the
              </span>{" "}
              <a
                href="https://github.com/JunDevHarsh/ReadmeEase/blob/dev/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white no-underline hover:underline"
                aria-label="MIT LICENSE"
                title="Project's MIT LICENSE"
              >
                MIT
              </a>{" "}
              <span className="hidden md:inline font-normal text-[#c9d1d9]">
                LICENSE
              </span>
            </p>
          </div>
          <ul className="flex items-center justify-center gap-x-4 w-auto">
            <li className="w-auto">
              <Link
                href="/"
                className="text-sm text-center text-[#c9d1d9] hover:text-white font-medium tracking-wide"
                aria-label="Link: Home"
                title="Link: Home"
              >
                Home
              </Link>
            </li>
            <li className="w-auto">
              <Link
                href="/files"
                className="text-sm text-center text-[#c9d1d9] hover:text-white font-medium tracking-wide"
                aria-label="Link: Files"
                title="Link: Files"
              >
                Files
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
