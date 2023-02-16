function ProjectStar(): JSX.Element {
  return (
    <a
      href="https://github.com/JunDevHarsh/ReadmeEase/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative pl-3 pr-4 py-1 flex items-center justify-center w-auto bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-solid border-[#f0f6fc1a] hover:border-[#8b949e] rounded"
      aria-label="Star the Project"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>

      <span className="ml-2 text-sm text-center text-current font-normal tracking-wide">
        Star this Project
      </span>
    </a>
  );
}

export default ProjectStar;
