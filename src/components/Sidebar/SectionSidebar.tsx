import {
  getSectionData,
  updateSelectedSlug,
} from "@/store/slices/sectionSlice";
import { getSidebarInfo, toggleSidebar } from "@/store/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function SectionSidebar(): JSX.Element {
  const isSidebarOpen = useSelector(getSidebarInfo);
  const data = useSelector(getSectionData);
  const dispatch = useDispatch();

  return (
    <>
      <aside
        className={`absolute top-0 left-0 w-full min-h-[calc(100vh-110px)] h-full bg-[#111] transition-[max-width] z-10 duration-150 ease-linear border-r border-solid border-r-[#333] overflow-hidden md:overflow-hidden ${
          isSidebarOpen ? "max-w-[240px]" : "max-w-0"
        }`}
      >
        <div className="relative p-4 flex flex-col items-start justify-start min-w-[240px] max-w-[240px] w-full h-auto">
          <div className="inline-block w-full">
            <h3 className="text-xl text-left text-[#df6745] font-medium tracking-wide">
              Sections
            </h3>
          </div>
          <div className="mt-4 flex flex-col items-center w-full">
            <div className="block mb-2 w-full">
              <p className="text-xs text-white text-center font-normal tracking-wide">
                Selected sections:
              </p>
            </div>
            <div className="relative flex flex-col items-start justify-start gap-y-4 w-full h-auto">
              {data
                .filter((d: any) => d.isSelected)
                .map((item: any) => (
                  <button
                    key={item.id}
                    onClick={() => dispatch(updateSelectedSlug(item.id))}
                    className={`inline-block px-2.5 py-2 w-full bg-[#333] text-sm text-left text-[#eee] font-normal tracking-wide rounded ${
                      item.isFocused
                        ? "border-[#df6745]"
                        : "hover:bg-[#424242] focus-visible:bg-[#424242] border-transparent focus-visible:border-[#df6745]"
                    } outline-0 border-2 border-solid`}
                  >
                    {item.title}
                  </button>
                ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center w-full">
            <div className="block mb-2 w-full">
              <p className="text-xs text-white text-center font-normal tracking-wide">
                Select sections from given below
              </p>
            </div>
            <div className="relative flex flex-col items-start justify-start gap-y-4 w-full h-auto">
              {data
                .filter((d: any) => !d.isSelected)
                .map((item: any) => (
                  <button
                    key={item.id}
                    onClick={() => dispatch(updateSelectedSlug(item.id))}
                    className="inline-block px-2.5 py-2 w-full bg-[#333] hover:bg-[#424242] focus-visible:bg-[#424242] text-sm text-left text-[#eee] font-normal tracking-wide rounded outline-0 border-2 border-solid border-transparent focus-visible:border-[#df6745]"
                  >
                    {item.title}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          onClick={() => dispatch(toggleSidebar())}
          className="absolute top-0 right-0 h-full block w-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] z-[9]"
        ></div>
      )}
    </>
  );
}

export default SectionSidebar;
