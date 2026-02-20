import { useEffect } from "react";

export default function SQLSurvivor() {
  useEffect(() => {
    const prev = document.body.style.background;
    const prevHtml = document.documentElement.style.background;
    document.body.style.background = "#000";
    document.documentElement.style.background = "#000";
    return () => {
      document.body.style.background = prev;
      document.documentElement.style.background = prevHtml;
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#000" }}>
      <iframe
        src="/sql-survivor.html"
        title="SQL Survivor"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
    </div>
  );
}
