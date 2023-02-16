import { IconProps } from "./IconType";

function Clock({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={fillColor}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default Clock;
