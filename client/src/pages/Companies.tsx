import Navigation from '@/components/Navigation';
import GroupCompanies from '@/components/GroupCompanies';
import Footer from '@/components/Footer';

export default function Companies() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <Navigation />
            <GroupCompanies />
            <Footer />
        </div>
    );
}
