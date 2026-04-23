export default function LandingPage() { return ( <div className="min-h-screen bg-neutral-950 text-white font-sans"> {/* HERO */} <section className="px-6 py-16 max-w-6xl mx-auto text-center"> <p className="uppercase tracking-[0.35em] text-sm text-neutral-400 mb-4"> Immersive Muslim Fiction </p>

<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
      Stories You Don’t Just Read.
      <br />
      <span className="text-neutral-400">Stories You Live Through.</span>
    </h1>

    <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed mb-10">
      Emotional romance. Psychological suspense. Interactive mystery.
      <br />
      Every story begins FREE.
    </p>

    <a
      href="https://adamwym.gumroad.com"
      className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
    >
      Start Reading
    </a>
  </section>

  {/* FEATURED STORIES */}
  <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-10 md:grid-cols-2">

    {/* UNDERCOVER FAITH */}
    <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
      <div className="h-80 bg-[url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

      <div className="p-8">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
          Psychological Suspense
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Undercover Faith
        </h2>

        <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
          He was sent to spy on them.
          <br />
          He didn’t expect to start changing.
        </p>

        <a
          href="https://adamwym.gumroad.com/l/UndercoverFaithFreePreview"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Read FREE Preview
        </a>
      </div>
    </div>

    {/* HIJRAH HILLS */}
    <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
      <div className="h-80 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

      <div className="p-8">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
          Halal Slow-Burn Romance
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Hijrah Hills
        </h2>

        <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
          Quiet tension.
          <br />
          Unspoken feelings.
          <br />
          A love story that refuses to cross the line.
        </p>

        <a
          href="https://adamwym.gumroad.com/l/HijrahHillsEP1FREE"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Read Episode 1 FREE
        </a>
      </div>
    </div>
  </section>

  {/* COMING SOON */}
  <section className="max-w-5xl mx-auto px-6 pb-24">
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-10 border border-neutral-700 text-center">
      <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
        Coming Soon
      </p>

      <h2 className="text-5xl font-bold mb-6">
        The Sultan’s Seal
      </h2>

      <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
        An Interactive Mystery Experience.
        <br />
        One night. Three endings. One truth.
      </p>

      <div className="inline-block border border-neutral-600 rounded-2xl px-6 py-3 text-neutral-300">
        Before dawn, the palace will decide what the truth becomes.
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-neutral-800 py-10 text-center text-neutral-500 text-sm px-6">
    <p>
      Immersive Muslim Fiction • Romance • Suspense • Interactive Mystery
    </p>
  </footer>
</div>

) }
