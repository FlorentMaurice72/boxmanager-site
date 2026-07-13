import Hero from "@/components/landing/Hero";
import Counters from "@/components/landing/Counters";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Founder from "@/components/landing/Founder";
import FAQ from "@/components/landing/FAQ";
import BlogPreview from "@/components/landing/BlogPreview";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Counters />
      <Features />
      <HowItWorks />
      <Pricing />
      <Founder />
      <FAQ />
      <BlogPreview />
      <CTA />
    </main>
  );
}
