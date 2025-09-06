// components/GlowingButton.js
export default function GlowingButton({ text }) {
  return (
    <button className="relative px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-700 shadow-lg hover:scale-105 transition-transform">
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 opacity-75 blur-md animate-pulse"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
}
