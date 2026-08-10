import { ImageResponse } from "next/og";

export const alt = "SomaliaExpert - Somalia Expert Witness Services UK";
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
          backgroundColor: "#0F2420",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(31,92,84,0.7), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(224,112,80,0.25), transparent 50%)",
          padding: 72,
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#E07050",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          SomaliaExpert
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 720,
            lineHeight: 1.35,
          }}
        >
          Country expert evidence for Somali asylum appeals in UK tribunals
        </p>
      </div>
    ),
    { ...size }
  );
}
