import { ImageResponse } from "next/og";

export const size = 32;
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: "#001ec6",
        fontSize: 20,
        fontWeight: 600,
      }}
    >
      utk
    </div>,
    {
      width: size,
      height: size,
    },
  );
}
