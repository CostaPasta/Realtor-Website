'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  language: string;
  message: string;
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  // TODO: Replace with API route that sends email via Resend or Nodemailer
  const onSubmit = (data: ContactForm) => {
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nI am a: ${data.role}\nPreferred language: ${data.language}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:USARealtor1@gmail.com?subject=New Inquiry from ${data.firstName} ${data.lastName}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-2xl text-navy font-bold">Message sent!</p>
        <p className="mt-3 font-sans text-gray-600">
          Thank you for reaching out. Jose will be in touch within 24 hours — in your preferred
          language.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            First Name *
          </label>
          <input
            {...register('firstName', { required: 'Required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-coral">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Last Name *
          </label>
          <input
            {...register('lastName', { required: 'Required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-coral">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Email *
          </label>
          <input
            type="email"
            {...register('email', { required: 'Required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="you@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-coral">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Phone
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="(954) 000-0000"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            I am a... *
          </label>
          <select
            {...register('role', { required: 'Required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold bg-white"
          >
            <option value="">Select one</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Both">Both</option>
            <option value="Just exploring">Just exploring</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-xs text-coral">{errors.role.message}</p>
          )}
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Preferred Language
          </label>
          <select
            {...register('language')}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold bg-white"
          >
            <option value="English">English</option>
            <option value="Español">Español</option>
            <option value="Português">Português</option>
          </select>
        </div>
      </div>

      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Tell Jose about your goals, timeline, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Let&apos;s talk. No pressure, no obligation.
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-xl leading-relaxed">
            The best first step in any South Florida real estate decision is a conversation. Jose
            is available in English, Spanish, and Portuguese.
          </p>
        </div>
      </section>

      {/* ─── Contact Options ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Calendar size={22} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Schedule a Call</h3>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed">
                Book a 30-minute call at a time that works for you.
              </p>
              {/* TODO: Replace with <InlineWidget url="[CALENDLY_URL]" /> from react-calendly */}
              <div className="bg-cream rounded-xl p-6 text-center border border-dashed border-gray-200">
                <p className="font-sans text-xs text-gray-400">Calendar loading...</p>
                <p className="font-sans text-xs text-gray-300 mt-1">
                  {/* TODO: Embed Calendly widget here */}
                  [CALENDLY_URL]
                </p>
              </div>
              <Link
                href="/contact#form"
                className="mt-4 block text-center font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                Or use the form below →
              </Link>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle size={22} className="text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">WhatsApp</h3>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed">
                Prefer to message? Send Jose a message on WhatsApp — he typically responds within a
                few hours.
              </p>
              <a
                href="https://wa.me/19546141351" // TODO: Confirm WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Card 3: Direct */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Phone size={22} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy mb-2">Call or Email</h3>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed">
                Prefer to reach out directly? Jose is available Monday–Saturday.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+19546141351"
                  className="flex items-center gap-3 font-sans font-semibold text-navy hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold" />
                  (954) 614-1351
                </a>
                <a
                  href="mailto:USARealtor1@gmail.com"
                  className="flex items-center gap-3 font-sans font-semibold text-navy hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold" />
                  Jose@USAREALTOR.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section id="form" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="Send a Message"
              title="Get in touch with Jose"
              subtitle="Fill out the form and Jose will respond within 24 hours — in your preferred language."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Office Info / Map ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy mb-4">
                Atlantic Florida Properties
              </h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                Jose is affiliated with Atlantic Florida Properties, a full-service brokerage
                serving South Florida buyers and sellers. Licensed in the State of Florida.
              </p>
              <div className="space-y-2 font-sans text-sm text-gray-600">
                <p>South Florida, FL</p>
                {/* TODO: Replace with real license number */}
                <p>FL License # [LICENSE_NUMBER]</p>
                <p>Equal Housing Opportunity</p>
              </div>
            </div>
            {/* TODO: Replace map src with real embed URL from Google Maps */}
            <div className="rounded-2xl overflow-hidden h-64 bg-cream-dark border border-gray-200 flex items-center justify-center">
              <p className="font-sans text-xs text-gray-400 text-center px-8">
                Map embed placeholder
                {/* TODO: <iframe src="[GOOGLE_MAPS_EMBED_URL]" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" /> */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
