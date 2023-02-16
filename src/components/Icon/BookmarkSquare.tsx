import { IconProps } from "./IconType";

function BookmarkSquare({ fillColor }: IconProps): JSX.Element {
  if (!fillColor || fillColor.trim().length < 3) {
    fillColor = "currentColor";
  }
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={fillColor}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
      />
    </svg>
  );
}

export default BookmarkSquare;
