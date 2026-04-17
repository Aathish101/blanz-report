import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You - BALNZ',
  description: 'Thank you for reaching out to BALNZ',
};

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="w-full max-w-md animate-fade-in">
          <div className="backdrop-blur-xl bg-white/40 dark:bg-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl dark:shadow-2xl border border-white/20 dark:border-white/10 hover:shadow-3xl transition-all duration-500 animate-glow">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/balnz-logo.png"
                alt="BALNZ Logo"
                width={140}
                height={140}
                priority
                className="h-auto w-auto"
              />
            </div>

            {/* Check mark animation */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-4 leading-tight text-balance">
              Thank You 💜
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground text-center font-light mb-2">
              Your feedback has been received.
            </p>

            {/* Description */}
            <p className="text-base text-muted-foreground text-center mb-8 leading-relaxed">
              We appreciate you taking the time to reach out. Our team will review your message and get back to you as soon as possible, typically within 24 hours.
            </p>

            {/* Additional Info */}
            <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 mb-8 border border-white/20 dark:border-white/10">
              <p className="text-sm text-muted-foreground text-center">
                A confirmation email has been sent to your inbox. Check your spam folder if you don&apos;t see it.
              </p>
            </div>

            {/* Back to Home Button */}
            <Link href="/">
              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 text-primary-foreground font-semibold transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-xs text-muted-foreground text-center mt-8 opacity-70">
            We&apos;re here to support your wellness journey
          </p>
        </div>
      </div>
    </div>
  );
}
