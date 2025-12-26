import { ImageResponse } from "next/og";

export const size = {
  width: 85,
  height: 85,
};
export const contentType = "image/png";

export default function Logo() {
  return new ImageResponse(
    <svg
      width="85"
      height="85"
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="21" width="64" height="64" fill="#FFC972" />
      <circle cx="55" cy="30" r="30" fill="#D6DEE5" />
    </svg>,
    { ...size },
  );
}
