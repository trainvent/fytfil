import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

const features = [
  {
    icon: "🌱",
    title: "Plant-Powered Feed",
    description:
      "Follow vegans, activists, chefs, and creators. Your feed, curated for a cruelty-free lifestyle.",
  },
  {
    icon: "🥗",
    title: "Recipe Discovery",
    description:
      "Share and explore thousands of plant-based recipes from the community — from quick lunches to gourmet dinners.",
  },
  {
    icon: "🐾",
    title: "Activism & Advocacy",
    description:
      "Organise events, sign petitions, and amplify campaigns that protect animals and our planet.",
  },
  {
    icon: "💬",
    title: "Real Conversations",
    description:
      "Connect in topic-based communities: sustainability, zero-waste, fitness, travel, and more.",
  },
  {
    icon: "🌍",
    title: "Global Community",
    description:
      "Join millions of vegans from every corner of the world. Share your journey, find support, spark change.",
  },
  {
    icon: "🔒",
    title: "Values-First Design",
    description:
      "Built with privacy in mind, free from animal-product ads, and moderated by community guidelines you helped write.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-extrabold tracking-tight text-green-600">
            fytfil
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#why" className="hover:text-green-600 transition-colors">
              Why Fytfil
            </a>
            <a href="#join" className="hover:text-green-600 transition-colors">
              Join
            </a>
          </nav>
          <a
            href="#join"
            className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 uppercase tracking-wide">
              Launching Soon
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              The Social Platform{" "}
              <span className="text-green-600">Built for Vegans</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
              Fytfil is where plant-based living meets community. Share recipes,
              spark conversations, discover activism, and connect with millions of
              people who share your values — all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#join"
                className="rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-700 transition-colors"
              >
                Join the Waitlist
              </a>
              <a
                href="#features"
                className="rounded-full border border-green-200 bg-white px-8 py-4 text-base font-semibold text-green-700 hover:bg-green-50 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* decorative blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-100 opacity-40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-100 opacity-40 blur-3xl"
          />
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold">
                Everything you love about social media —{" "}
                <span className="text-green-600">reimagined</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
                We took inspiration from the platforms you already use and rebuilt
                them around compassion, community, and the planet.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Fytfil ── */}
        <section
          id="why"
          className="py-24 px-6 bg-gradient-to-br from-green-600 to-emerald-500 text-white"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight">
                X.com for vegans — built by the community, for the community
              </h2>
              <p className="mt-6 text-green-100 text-lg leading-relaxed">
                Mainstream social media is loud, distracting, and driven by ad
                algorithms that don&apos;t reflect your values. Fytfil is
                different. Every design decision starts with one question:{" "}
                <em>is this good for vegans and the planet?</em>
              </p>
              <ul className="mt-8 space-y-3 text-green-50 text-sm">
                {[
                  "No animal-product advertising",
                  "Chronological feed option",
                  "Community-led moderation",
                  "Open-source roadmap",
                  "Carbon-neutral infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-green-300 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur">
              <p className="text-6xl font-extrabold">🌿</p>
              <p className="mt-4 text-2xl font-bold">
                Your voice. Your values. Your platform.
              </p>
              <p className="mt-3 text-green-100 text-sm">
                Built on the belief that social media should reflect the world
                we&apos;re trying to create.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA / Join ── */}
        <section id="join" className="py-24 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold">
              Be the first on{" "}
              <span className="text-green-600">Fytfil</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              We&apos;re opening our doors to early adopters. Sign up below and
              we&apos;ll send you an invite when your spot is ready.
            </p>
            <WaitlistForm />
            <p className="mt-4 text-xs text-gray-400">
              No spam. Unsubscribe anytime. 100% plant-based.
            </p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span className="font-bold text-green-600 text-lg">fytfil</span>
          <p>© {new Date().getFullYear()} Fytfil. Made with 💚 for the planet.</p>
          <Link
            href="https://next.trainvent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors underline underline-offset-2"
          >
            next.trainvent.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
