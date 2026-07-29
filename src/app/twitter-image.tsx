import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zaid Husain — Full Stack Developer";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 15% 50%, rgba(59,130,246,0.1) 0%, transparent 55%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "100px",
            padding: "5px 14px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: 500 }}>
            Open to Opportunities
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-1.5px",
            marginBottom: "10px",
          }}
        >
          Zaid Husain
        </div>

        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#3b82f6",
            marginBottom: "20px",
          }}
        >
          Full Stack Developer
        </div>

        <div
          style={{
            fontSize: "16px",
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          React.js · Node.js · TypeScript · MERN · Amravati, India
        </div>
      </div>
    ),
    { ...size }
  );
}
