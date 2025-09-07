// components/Layout.js
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-800 text-white"></header>
      <main className="flex-1">{children}</main>
      <footer className="p-4 bg-gray-200"></footer>
    </div>
  );
}
