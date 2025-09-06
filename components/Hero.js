export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", animation: "fadeIn 2s ease-out" }}>
        🚀 Welcome to Friged AI
      </h1>
      <p style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", animation: "slideInLeft 2s ease-out" }}>
        Cutting-edge AI cooking assistant from the future
      </p>
    </section>
  );
}
