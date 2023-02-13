import Link from "next/link";
import { Home, Bookmark, Doc } from "@/components/Icon";
import { useRouter } from "next/router";

interface MenuList {
  id: string;
  title: string;
  path: string;
  svg: JSX.Element;
}

function Header() {
  const router = useRouter();

  const menu_list: Array<MenuList> = [
    {
      id: "nBJXuEVqO0",
      title: "Home",
      path: "/",
      svg: <Home />,
    },
    {
      id: "SqFI9VXrMu",
      title: "Docs",
      path: "/docs",
      svg: <Bookmark />,
    },
    {
      id: "z1Ht6MIhxG",
      title: "Editor",
      path: "/editor",
      svg: <Doc />,
    },
  ];

  return (
    <header className="relative top-0 w-full bg-[#0a0a0a] border-b border-solid border-b-[#333]">
      <div className="mx-auto max-w-[1440px] w-full">
        <nav className="relative px-6 py-3 flex flex-row items-center justify-between w-full bg-transparent">
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
          <ul
            className="hidden sm:flex flex-row items-center justify-center gap-x-4 w-auto"
            role="list"
          >
            {menu_list.map((item) => (
              <li key={item.id} className="inline-block w-auto" role="listitem">
                <Link
                  href={item.path}
                  className={`flex items-center justify-center w-auto ${
                    item.path === router.asPath
                      ? "text-white"
                      : "text-[#696969] hover:text-[#c9d1d9] focus-within:text-[#c9d1d9]"
                  }`}
                  aria-label={`Go to ${item.title}`}
                  title={item.title}
                >
                  {item.svg}
                  <span className="ml-1 text-base text-center text-current font-medium tracking-wide">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
