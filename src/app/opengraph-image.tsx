import { ImageResponse } from "next/og";
import { SEO } from "../data/seo.constants";

export const runtime = "edge";
export const alt = `${SEO.PERSON_NAME} — ${SEO.JOB_TITLE} Portfolio`;
export const size = { width: 1200, height: 630 };
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
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Availability badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: "14px", fontWeight: 500 }}>
            Available for Software Engineering Roles
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "12px",
          }}
        >
          {SEO.PERSON_NAME}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#3b82f6",
            marginBottom: "28px",
          }}
        >
          {SEO.JOB_TITLE}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            lineHeight: 1.6,
            maxWidth: "700px",
            marginBottom: "48px",
          }}
        >
          Creator of Zashly · Zashio · Zashub
          <br />
          React.js · Node.js · TypeScript · MongoDB · PostgreSQL · WebRTC
        </div>

        {/* Location & Stack Row */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#6b7280",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            📍 {SEO.LOCATION.locality}, {SEO.LOCATION.region}, {SEO.LOCATION.country}
          </span>
          <span style={{ color: "#374151", fontSize: "15px" }}>•</span>
          <span style={{ color: "#6b7280", fontSize: "15px" }}>
            MERN Stack · TypeScript · Scalable Architecture
          </span>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#374151",
            fontSize: "14px",
          }}
        >
          {new URL(SEO.SITE_URL).hostname}
        </div>
      </div>
    ),
    { ...size }
  );
}
