import { DoubleLeftArrow, DoubleRightArrow } from "@/components/Icon";
import { getSidebarInfo, toggleSidebar } from "@/store/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function ToggleSidebarButton(): JSX.Element {
  const isSidebarOpen = useSelector(getSidebarInfo);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      className="flex items-center justify-center w-[52px] h-[52px] flex-[52px_52px_auto] bg-[#35383f] hover:bg-[#3e424a]"
    >
      {isSidebarOpen ? <DoubleLeftArrow /> : <DoubleRightArrow />}
    </button>
  );
}

export default ToggleSidebarButton;
