import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import LocationsSection from '@/components/LocationsSection';
import WholesaleSection from '@/components/WholesaleSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <LocationsSection />
      <WholesaleSection />
      <Footer />
    </div>
  );
};

export default Index;
