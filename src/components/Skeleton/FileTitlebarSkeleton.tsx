function FileTitlebarSkeleton(): JSX.Element{
    return (
        <div className="relative flex items-center justify-start w-full bg-[#111]">
            <div className="animate-pulse w-[52px] h-[52px] flex-[52px_52px_auto] bg-[#2a2a2a]"></div>
            <div className="px-4 py-2 flex items-center justify-between w-full">
                <div className="animate-pulse inline-block py-4 w-80 bg-[#2a2a2a] rounded"></div>
                <div className="flex items-center justify-center gap-x-4 w-auto">
                    <div className="animate-pulse inline-block py-4 w-20 bg-[#2a2a2a] rounded"></div>
                    <div className="animate-pulse inline-block py-4 w-20 bg-[#2a2a2a] rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default FileTitlebarSkeleton;