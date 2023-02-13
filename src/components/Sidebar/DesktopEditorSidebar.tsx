import { getSidebarInfo } from "@/store/slices/sidebarSlice";
import { useSelector } from "react-redux";

function DesktopSidebar(): JSX.Element {
  const isSidebarOpen = useSelector(getSidebarInfo);
  return (
    <aside
      className={`relative w-full min-h-[calc(100vh-110px)] h-full transition-[max-width] duration-150 ease-linear border-r border-solid border-r-[#333] overflow-hidden ${
        isSidebarOpen ? "max-w-[240px]" : "max-w-0"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col items-start justify-start w-full h-full bg-[#111]">
        <div className="inline-block w-full">
          <h3 className="text-xl text-left text-[#df6745] font-medium tracking-wide">
            Sections
          </h3>
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
