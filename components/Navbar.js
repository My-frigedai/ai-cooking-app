// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold tracking-widest">Friged AI</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#features" className="hover:text-cyan-400 transition">Features</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>
    </nav>
  );
}
