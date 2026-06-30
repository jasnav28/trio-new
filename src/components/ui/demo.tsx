import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
  "/services/BRL.webp",
  "/services/BSS.webp",
  "/services/CLC.webp",
  "/services/CWU.webp",
  "/services/LLP.webp",
  "/services/NPE.webp",
  "/services/TIS.webp"
];

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Join over 100,000 happy creators"
      title={
        <>
          Engage Audiences
          <br />
          with Stunning Videos
        </>
      }
      description="Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward."
      ctaText="Get Started"
      images={DEMO_IMAGES}
    />
  );
};

export default AnimatedHeroDemo;
