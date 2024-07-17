// app/components/Hero.js

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CBc8PL0H6Jb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-t-3xl">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>
      <div className="relative z-20 container py-24 md:py-32 lg:py-40 px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          A Robotics Society, run by Humans.
        </h1>
        <p className="max-w-xl text-lg sm:text-xl md:text-2xl text-white/90">
          #weTheRAS
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
          <Link
            href="/rasians"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-white/90 shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            RASIANS 👾
          </Link>
        </div>
      </div>
    </section>
  )
}