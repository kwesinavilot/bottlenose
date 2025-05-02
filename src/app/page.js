"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            A powerfully simple email newsletter platform.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Have a minute? Create your first customized email newsletter in a jiff with <span className="font-semibold text-sky-700">Bottlenose AI</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
            <Button asChild size="lg" className="px-8 py-4 text-lg" id="get-started">
              <a href="#get-started">Create Your First Newsletter &rarr;</a>
            </Button>
            <span className="text-slate-500 text-base">It’s free</span>
          </div>
        </div>
      </section>

      {/* You + AI */}
      <Section
        id="you-ai"
        title="You + AI"
        subtitle="Powerful alone, unbeatable together"
        description="Harness your expertise and our AI agents in tandem—research, draft, and deliver newsletters that blend human insight with machine speed."
      />

      {/* Customization */}
      <Section
        id="customization"
        title="Customization"
        subtitle="Personalization that’s intuitive (not frustrating)"
        description="Fine-tune tone, format, and sources in just a few clicks—no deep settings menus, just straight-forward controls that respect your time."
      />

      {/* Efficiency */}
      <Section
        id="efficiency"
        title="Efficiency"
        subtitle="Automate the grind, focus on impact"
        description="From gathering the latest stories to shaping the final draft, Bottlenose handles every step so you can refine the ideas that matter."
      />

      {/* Collaboration */}
      <Section
        id="collaboration"
        title="Collaboration"
        subtitle="Teamwork made seamless"
        description="Invite collaborators or clients into your workspace, manage review rounds, and approve final drafts—all within a unified platform."
      />

      {/* Insight */}
      <Section
        id="insight"
        title="Insight"
        subtitle="From data to decisions in a click"
        description="Dive into open-rate trends, click metrics, and sentiment analysis to learn what resonates—and guide your content strategy forward."
      />

      {/* Scalability */}
      <Section
        id="scalability"
        title="Scalability"
        subtitle="From solo newsletters to enterprise briefs"
        description="Whether you’re sending one digest or dozens of targeted campaigns, Bottlenose grows with your needs—no extra setup required."
      />

      {/* Global Reach */}
      <Section
        id="global-reach"
        title="Global Reach"
        subtitle="Multilingual delivery without extra effort"
        description="Publish in any language: our Translation Agent localizes content and adjusts cultural details so every subscriber feels heard."
      />
    </>
  );
}

// Simple Section component for landing page blocks
function Section({ id, title, subtitle, description }) {
  return (
    <section id={id} className="py-16 border-b border-slate-100 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sky-700 font-bold text-xl mb-2 uppercase tracking-wide">{title}</h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{subtitle}</h3>
        <p className="text-lg text-slate-700">{description}</p>
      </div>
    </section>
  );
}
