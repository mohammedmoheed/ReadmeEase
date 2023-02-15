import { EditFileCardButton, PreviewFileCardButton } from "@/components/Button";

interface FilePreviewCardProps {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

function formatTime(timestamp: number): string {
  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (weeks < 4) {
    return `${weeks} weeks ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  }
  return `${years} years ago`;
}

function FilePreviewCard({
  id,
  title,
  createdAt,
  updatedAt,
}: FilePreviewCardProps): JSX.Element {
  return (
    <div
      className="relative inline-block w-60 h-72 bg-[#0a0a0a] border border-solid border-[#333] rounded-lg"
      aria-label="File: Sample"
    >
      <div className="p-4 flex flex-col items-center justify-between w-full h-full">
        <div className="flex flex-col items-start w-full">
          <span className="text-xs text-center text-[#c9d1d9] font-normal tracking-wide">
            Filename:
          </span>
          <p className="text-lg text-left text-white font-medium tracking-wide break-all">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-y-2 w-full">
          <div className="flex flex-col items-start w-full">
            <span className="text-xs text-left text-[#c9d1d9] font-normal tracking-wide">
              CreatedAt:
            </span>
            <p className="text-sm text-left text-white font-medium tracking-wide">
              {formatTime(createdAt)}
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <span className="text-xs text-left text-[#c9d1d9] font-normal tracking-wide">
              UpdatedAt:
            </span>
            <p className="text-sm text-left text-white font-medium tracking-wide">
              {formatTime(updatedAt)}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 w-full">
            <PreviewFileCardButton path={`/files/${id}`} />
            <EditFileCardButton path={`/editor/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilePreviewCard;
