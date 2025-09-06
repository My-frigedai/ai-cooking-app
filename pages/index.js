// pages/index.js
import "../styles/globals.css";
import "../styles/animations.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-cyan-400">Friged AI</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
          Experience the future of AI-driven innovation with cutting-edge design
          and futuristic vibes 🚀
        </p>
        <GlowingButton text="Get Started" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <p className="max-w-xl mx-auto text-gray-400">
          From intelligent automation to futuristic design, our platform is
          crafted to push boundaries.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-gray-400">
          Have questions? Reach out at{" "}
          <span className="text-cyan-400">contact@friged-ai.com</span>
        </p>
      </section>

      <Footer />
    </div>
  );
}
