'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BALNZContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mrerqaek', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {/* Header Section */}
        <div className="animate-fade-in mb-12 flex flex-col items-center text-center max-w-2xl">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/balnz-logo.png"
              alt="BALNZ Logo"
              width={120}
              height={120}
              priority
              className="h-auto w-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
            Send Us a Message
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground font-light">
            We&apos;re here to support your journey
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md animate-fade-in">
          <div className="backdrop-blur-xl bg-white/40 dark:bg-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl dark:shadow-2xl border border-white/20 dark:border-white/10 hover:shadow-3xl transition-all duration-500 animate-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 animate-fade-in">
                  <p className="text-red-700 dark:text-red-300 text-center font-medium">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 focus:scale-105"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 focus:scale-105"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone <span className="text-muted-foreground text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 focus:scale-105"
                />
              </div>

              {/* Topic Dropdown */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  I am reaching out about
                </label>
                <select
                  name="topic"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 focus:scale-105 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Business Inquiry">Business Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us more about your wellness journey..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/8 border border-white/30 dark:border-white/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/80 dark:focus:bg-white/15 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-primary-foreground font-semibold transition-all duration-300 mt-8"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Footer note */}
          <p className="text-xs text-muted-foreground text-center mt-8 opacity-70">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
