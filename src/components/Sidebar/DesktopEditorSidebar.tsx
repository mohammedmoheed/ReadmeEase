function DesktopEditorSidebar(): JSX.Element {
  return (
    <aside className="p-4 flex flex-col items-start justify-start max-w-[280px] w-full min-h-[calc(100vh-58px)] h-full bg-[#111]">
      <div className="inline-block w-full">
        <h3 className="text-xl text-left text-[#df6745] font-medium tracking-wide">
          Sections
        </h3>
      </div>
    </aside>
  );
}

export default DesktopEditorSidebar;
