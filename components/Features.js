export default function Features() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "50px 20px",
      }}
    >
      <div style={{ border: "1px solid #0ff", padding: "20px", borderRadius: "12px", animation: "fadeIn 2s ease-out" }}>
        <h3>🔍 Smart Recipe Search</h3>
        <p>Find the best recipes using AI-driven recommendations.</p>
      </div>
      <div style={{ border: "1px solid #0ff", padding: "20px", borderRadius: "12px", animation: "fadeIn 2.5s ease-out" }}>
        <h3>🧠 AI Suggestions</h3>
        <p>Get personalized cooking advice based on your fridge.</p>
      </div>
      <div style={{ border: "1px solid #0ff", padding: "20px", borderRadius: "12px", animation: "fadeIn 3s ease-out" }}>
        <h3>⚡ Instant Meal Ideas</h3>
        <p>Save time with quick, healthy, and delicious meal plans.</p>
      </div>
    </section>
  );
}
