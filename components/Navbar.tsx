export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            ⚛️ SYNERGIC BOND
          </h1>
        </div>

        <div className="hidden gap-8 text-sm md:flex">

          <a href="#">Home</a>

          <a href="#">JEE</a>

          <a href="#">NEET</a>

          <a href="#">Olympiads</a>

          <a href="#">Resources</a>

          <a href="#">Donate</a>

        </div>

      </div>
    </nav>
  );
}