"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-8 rounded-full bg-green-50 border border-green-200 px-8 py-4 text-sm font-semibold text-green-700">
        🌱 You&apos;re on the list! We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-gray-200 px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
      >
        Join Waitlist
      </button>
    </form>
  );
}
