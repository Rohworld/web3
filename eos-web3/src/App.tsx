/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

// --- Components ---

const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[120px] py-5">
      <div className="flex items-center gap-10">
        <div className="text-white font-bold text-xl tracking-tighter w-[187px] h-[25px] flex items-center">
          LOGOIPSUM
        </div>
        <div className="hidden md:flex items-center gap-[30px]">
          {["Get Started", "Developers", "Features", "Resources"].map((link) => (
            <a key={link} href="#" className="flex items-center gap-1 text-[14px] font-medium text-white hover:text-white/70 transition-colors">
              {link}
              <ChevronDown size={14} />
            </a>
          ))}
        </div>
      </div>
      <button className="glowing-pill border-[0.6px] border-white px-[29px] py-[11px] bg-black text-white text-[14px] font-medium">
        Join Waitlist
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col items-center text-center pt-[200px] md:pt-[280px] px-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-1 h-1 rounded-full bg-white" />
            <span className="text-[13px] font-medium">
              <span className="text-white/60">Early access available from</span> May 1, 2026
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="delay-100">
          <h1 className="text-gradient text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[613px] mb-6">
            Web3 at the Speed of Experience
          </h1>
        </ScrollReveal>

        <ScrollReveal className="delay-200">
          <p className="text-white/70 text-[15px] font-normal max-w-[680px] mb-10">
            Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
          </p>
        </ScrollReveal>

        <ScrollReveal className="delay-300">
          <button className="glowing-pill border-[0.6px] border-white px-[36px] py-[14px] bg-white text-black text-[14px] font-medium">
            Join Waitlist
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const companies = ["ARNESIA", "vayu", "Quantum", "Nexus.", "O B S I D I A N", "Lumina"];
  return (
    <section className="py-20 overflow-hidden">
      <div className="mask-fade-edges">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-20 px-10">
              {companies.map((company, idx) => (
                <span
                  key={idx}
                  className={`text-2xl tracking-tighter ${
                    idx % 2 === 0 ? "font-bold opacity-40" : "font-light italic opacity-20 tracking-widest"
                  }`}
                >
                  {company}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent">
            Engineered for the Next Generation
          </h2>
          <p className="text-white/50 text-lg">Uncompromising performance for the decentralized web.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal className="md:col-span-2">
            <div className="glass-card p-10 h-[320px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <h3 className="text-2xl font-medium mb-4">Sub-second Finality</h3>
              <p className="text-white/50 max-w-sm">Experience near-instant transaction confirmations across the entire network.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-100">
            <div className="glass-card p-10 h-[320px]">
              <h3 className="text-2xl font-medium mb-4">Infinite Scale</h3>
              <p className="text-white/50">Horizontal scaling architecture designed to handle global demand without congestion.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-200">
            <div className="glass-card p-10 h-[320px]">
              <h3 className="text-2xl font-medium mb-4">Institutional Security</h3>
              <p className="text-white/50">Battle-tested consensus mechanisms protecting billions in digital assets.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 delay-300">
            <div className="glass-card p-10 h-[320px]">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <h3 className="text-2xl font-medium mb-4">Fully EVM Compatible</h3>
              <p className="text-white/50 max-w-sm">Deploy your existing Solidity smart contracts with zero changes required.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  return (
    <section className="border-y border-white/5 bg-black/50 backdrop-blur-xl py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {[
          { label: "Transactions Per Second", value: "100k+" },
          { label: "Time to Finality", value: "<400ms" },
          { label: "Average Transaction Fee", value: "$0.001" },
        ].map((metric, i) => (
          <ScrollReveal key={i} className={`flex flex-col items-center text-center px-8 ${i < 2 ? 'md:border-r border-white/10' : ''}`}>
            <span className="text-gradient text-[56px] font-medium mb-2">{metric.value}</span>
            <span className="text-white/50 text-sm uppercase tracking-widest">{metric.label}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

const CodeEditor = () => {
  const code = `import { EOSClient } from "@eos/sdk";

const client = new EOSClient({
  network: "mainnet",
  apiKey: process.env.EOS_KEY
});

// Initialize transaction
const tx = await client.transfer({
  to: "0x71C...392",
  amount: "1.5 EOS",
  memo: "Payment for services"
});

console.log(\`Transaction hash: \${tx.hash}\`);`;

  return (
    <div className="relative w-full max-w-[700px] mx-auto group">
      {/* Background Glow */}
      <div className="absolute -inset-4 bg-white/[0.02] blur-2xl rounded-[2rem] pointer-events-none" />
      
      <div className="relative glass-card bg-[#09090b] border-white/10 overflow-hidden">
        {/* Fractal Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs text-white/30 font-mono">init.ts</span>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Content */}
        <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
          <pre>
            <code>
              {code.split('\n').map((line, i) => {
                // Simple syntax highlighting
                let highlighted = line
                  .replace(/(import|from|const|await|new|return)/g, '<span style="color: #f07178">$1</span>')
                  .replace(/(EOSClient|client|tx)/g, '<span style="color: #e5c07b">$1</span>')
                  .replace(/("[^"]*")/g, '<span style="color: #c3e88d">$1</span>')
                  .replace(/(\/\/.*)/g, '<span style="color: #6b7280">$1</span>')
                  .replace(/(true|false)/g, '<span style="color: #89ddff">$1</span>');

                return (
                  <div key={i} className="flex gap-4">
                    <span className="text-white/10 w-4 text-right select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const DeveloperSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <div className="px-4 py-1 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">
            Developer First
          </div>
        </ScrollReveal>

        <ScrollReveal className="delay-100">
          <h2 className="text-[36px] md:text-[56px] font-medium mb-6">Connect in lines, not days.</h2>
        </ScrollReveal>

        <ScrollReveal className="delay-200">
          <p className="text-white/50 text-lg max-w-[540px] mb-8">
            Our unified SDK abstracts away the complexity of Web3, letting you focus on building exceptional user experiences.
          </p>
        </ScrollReveal>

        <ScrollReveal className="delay-300">
          <a href="#" className="group flex items-center gap-2 text-white font-medium mb-16 hover:text-white/80 transition-colors">
            Read Documentation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>

        <ScrollReveal className="delay-400 w-full">
          <CodeEditor />
        </ScrollReveal>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden text-center">
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-gradient text-[48px] md:text-[64px] font-medium mb-6">Ready to build the future?</h2>
        </ScrollReveal>

        <ScrollReveal className="delay-100">
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of creators and developers shaping the next generation of the internet.
          </p>
        </ScrollReveal>

        <ScrollReveal className="delay-200">
          <button className="glowing-pill border-[0.6px] border-white px-[36px] py-[14px] bg-white text-black text-[14px] font-medium">
            Join Waitlist
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white/80 font-bold text-xl tracking-tighter">
          LOGOIPSUM
        </div>
        
        <div className="flex items-center gap-8">
          {["Privacy Policy", "Terms of Service", "Twitter", "Discord"].map((link) => (
            <a key={link} href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="text-[13px] text-white/30">
          © 2026 EOS Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <Features />
      <Metrics />
      <DeveloperSection />
      <BottomCTA />
      <Footer />
    </main>
  );
}
