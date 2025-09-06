import "../styles/globals.css";
import "../styles/animations.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Background />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
