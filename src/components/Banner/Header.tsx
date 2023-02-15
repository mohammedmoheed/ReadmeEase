import Link from "next/link";
import { Home, Doc, RELogo } from "@/components/Icon";
import { useRouter } from "next/router";
import { ProjectStar } from "@/components/Button";

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
      title: "Files",
      path: "/files",
      svg: <Doc />,
    },
  ];

  return (
    <header className="relative top-0 w-full bg-[#0a0a0a] border-b border-solid border-b-[#333]">
      <div className="mx-auto max-w-[1440px] w-full">
        <div className="p-2 flex items-center justify-between w-full bg-black">
          <p className="text-base text-center text-[#c9d1d9] font-normal tracking-wide">
            <span className="hidden sm:inline">
              You are viewing this project in{" "}
            </span>
            <span className="text-white font-medium">&#96;beta&#96;</span>{" "}
            <span>environment</span>
          </p>
        </div>
        <nav className="relative px-6 py-3 flex flex-row items-center justify-start w-full bg-transparent">
          <div className="flex items-center justify-center w-auto">
            <Link
              href="/"
              className="flex items-center justify-center"
              aria-label="ReadmeEase logo"
              title="ReadmeEase"
            >
              <div className="flex items-center justify-center w-auto">
                <RELogo fillColor="#e56643" />
                <span className="ml-2 text-2xl text-center text-white font-medium tracking-wider">
                  ReadmeEase
                </span>
              </div>
            </Link>
          </div>
          <ul
            className="ml-8 hidden sm:flex flex-row items-center justify-center gap-x-4 w-auto"
            role="list"
          >
            {menu_list.map((item) => (
              <li key={item.id} className="inline-block w-auto" role="listitem">
                <Link
                  href={item.path}
                  className={`flex items-center justify-center w-auto ${
                    item.path.replace("/", "") === router.asPath.split("/")[1]
                      ? "text-white"
                      : "text-[#696969] hover:text-[#c9d1d9] focus-within:text-[#c9d1d9]"
                  }`}
                  aria-label={`Go to ${item.title}`}
                  title={item.title}
                >
                  <div className="flex items-center justify-center">
                    {item.svg}
                    <span className="ml-1 text-base text-center text-current font-medium tracking-wide">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center justify-center w-auto">
            <ProjectStar />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
