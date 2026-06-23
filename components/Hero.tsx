export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="max-w-5xl text-5xl font-bold md:text-7xl">

        The World's Most Advanced

        <br />

        Chemistry Learning Ecosystem

      </h1>

      <p className="mt-8 text-xl text-gray-300">

        JEE Main • JEE Advanced • NEET

      </p>

      <p className="mt-3 text-xl text-gray-300">

        INChO • IChO • Global Olympiads

      </p>

      <p className="mt-8 text-lg text-gray-400">

        One Platform. Infinite Chemistry.

      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <button className="rounded-full bg-blue-500 px-8 py-4 font-semibold">

          Start Learning

        </button>

        <button className="rounded-full border border-white/20 px-8 py-4">

          Download Resources

        </button>

      </div>

    </section>
  );
}