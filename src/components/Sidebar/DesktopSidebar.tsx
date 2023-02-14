import { getSidebarInfo, toggleSidebar } from "@/store/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function DesktopSidebar(): JSX.Element {
  const isSidebarOpen = useSelector(getSidebarInfo);
  const dispatch = useDispatch();

  return (
    <>
      <aside
        className={`absolute md:relative top-0 left-0 w-full min-h-[calc(100vh-110px)] h-full transition-[max-width] z-10 duration-150 ease-linear border-r border-solid border-r-[#333] overflow-auto md:overflow-hidden ${
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
      {isSidebarOpen && (
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="absolute top-0 right-0 h-full block md:hidden w-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] z-[9] md:z-0"
        ></div>
      )}
    </>
  );
}

export default DesktopSidebar;
