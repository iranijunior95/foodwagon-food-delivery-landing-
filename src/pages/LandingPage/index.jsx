import Header from '../../components/Header';
import SectionFlashDeals from '../../features/SectionFlashDeals';
import './style.css';

function LandingPage() {
    return (
        <>
            <Header />

            <main>
                <SectionFlashDeals />
                <section></section>
            </main>
        </>
    );
}

export default LandingPage;