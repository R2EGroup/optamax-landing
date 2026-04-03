import { ImageResponse } from "next/og";
import { siteDescription } from "@/lib/site";

export const runtime = "edge";

export const alt = "Optamax | The Energy Operating System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tagline = siteDescription.slice(0, 120) + "…";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0d1a3a 0%, #172b56 60%, #1e3a6e 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(247,248,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,248,250,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            position: "relative",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#f7f8fa",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            OPTAMAX
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "rgba(247,248,250,0.75)",
              letterSpacing: "4px",
              fontWeight: 400,
            }}
          >
            The Energy Operating System
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "3px",
              background: "rgba(247,248,250,0.3)",
              borderRadius: "2px",
            }}
          />

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(247,248,250,0.6)",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Domain stamp */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            display: "flex",
            fontSize: 20,
            color: "rgba(247,248,250,0.4)",
            letterSpacing: "2px",
          }}
        >
          optamax.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
