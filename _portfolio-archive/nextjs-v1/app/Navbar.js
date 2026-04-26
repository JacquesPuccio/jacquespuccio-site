export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-40 backdrop-blur-md">
      <div className="text-white font-semibold tracking-wide">
        JP
      </div>

      <div className="text-sm text-gray-400">
        Ops · SaaS · Systems
      </div>
    </nav>
  );
}