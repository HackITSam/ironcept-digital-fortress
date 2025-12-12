import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsCounter } from "@/components/home/StatsCounter";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
