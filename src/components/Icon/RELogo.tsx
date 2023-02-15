import { IconProps } from "./IconType";

function RELogo({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={fillColor}
    >
      <g fill={fillColor} fillRule="evenodd">
        <path d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z" />
      </g>
    </svg>
  );
}

export default RELogo;
