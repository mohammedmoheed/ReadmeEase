import { IconProps } from "./IconType";

function Plus({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      stroke={fillColor}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export default Plus;
