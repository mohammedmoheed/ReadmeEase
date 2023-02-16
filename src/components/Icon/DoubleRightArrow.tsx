import { IconProps } from "./IconType";

function DoubleRightArrow({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      stroke={fillColor}
      strokeWidth={1.5}
      fill="none"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default DoubleRightArrow;
