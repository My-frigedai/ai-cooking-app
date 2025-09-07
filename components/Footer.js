// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      textAlign: "center",
      padding: "18px 12px",
      color: "#88dfe8",
      borderTop: "1px solid rgba(0,200,255,0.06)",
      zIndex: 10,
      position: "relative",
      background: "transparent"
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ fontSize: 14 }}>© 2025 Fridge AI. All rights reserved.</div>
<Link 
  href="/terms" 
  style={{ fontSize: 13, color: "#9befff", textDecoration: "underline" }}
>
  特定商取引法に基づく表記
</Link>

      </div>
    </footer>
  );
}
