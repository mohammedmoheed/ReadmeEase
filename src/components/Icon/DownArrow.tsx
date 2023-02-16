import { IconProps } from "./IconType";

function DownArrow({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={fillColor}
      className="w-5 h-65"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default DownArrow;
