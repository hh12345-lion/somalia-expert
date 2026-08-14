import { ImageResponse } from "next/og";

export const alt = "Somalia Expert - Somalia Expert Witness Services UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#1C1F24",
          backgroundImage:
            "linear-gradient(165deg, #2f3948 0%, #1c1f24 68%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Somalia Expert
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 760,
            lineHeight: 1.35,
          }}
        >
          Country reports for Somali asylum appeals in UK tribunals
        </p>
      </div>
    ),
    { ...size }
  );
}
