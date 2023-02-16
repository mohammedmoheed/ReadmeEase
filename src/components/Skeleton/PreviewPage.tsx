function PreviewPage(): JSX.Element {
    return (
      <div className="relative h-auto w-full">
        <div className="flex items-center justify-start w-full bg-[#111] border-b border-solid border-[#333]">
          <div className="py-2 px-3 flex items-center justify-between w-full">
            <div className="animte-pulse inline-block py-3 w-48 bg-[#222] rounded"></div>
            <div className="flex items-center justify-center gap-x-2 w-auto">
              <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
              <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse block min-h-[600px] h-full w-full bg-[#222]"></div>
      </div>
    );
  }
  
  export default PreviewPage;
  