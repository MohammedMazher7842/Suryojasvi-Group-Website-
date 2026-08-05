import Navigation from '@/components/Navigation';
import Culture from '@/components/Culture';
import Footer from '@/components/Footer';

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Top Spacer to account for fixed Navigation bar */}
      <div className="pt-20"></div>
      
      <Culture />
      
      <Footer />
    </div>
  );
}
