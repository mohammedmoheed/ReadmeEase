function EditorPageSkeleton(): JSX.Element {
  return (
    <div className="relative h-auto w-full">
      <div className="flex items-center justify-start w-full bg-[#111] border-b border-solid border-[#333]">
        <div className="animate-pulse inline-block w-[56px] h-[56px] bg-[#222]"></div>
        <div className="py-2 px-3 flex items-center justify-between w-[calc(100%-56px)]">
            <div className="animte-pulse inline-block py-3 w-48 bg-[#222] rounded"></div>
            <div className="flex items-center justify-center gap-x-2 w-auto">
                <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
                <div className="animate-pulse inline-block w-24 py-4 bg-[#222] rounded"></div>
            </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="inline-block w-full md:w-1/2 border-r-0 md:border-r border-b md:border-b-0 border-solid border-[#333]">
          <div className="block py-6 w-full bg-[#161616] border-b border-solid border-b-[#333]"></div>
          <div className="animate-pulse block w-full min-h-[604px] h-full bg-[#222]"></div>
        </div>
        <div className="inline-block w-full md:w-1/2">
          <div className="block py-6 w-full bg-[#161616] border-b border-solid border-b-[#333]"></div>
          <div className="animate-pulse block w-full min-h-[604px] h-full bg-[#222]"></div>
        </div>
      </div>
    </div>
  );
}

export default EditorPageSkeleton;
