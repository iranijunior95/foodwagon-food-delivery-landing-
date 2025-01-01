import Header from '../../components/Header';
import SectionFlashDeals from '../../features/SectionFlashDeals';
import SectionHowDoesItWork from '../../features/SectionHowDoesItWork';
import './style.css';

function LandingPage() {
    return (
        <>
            <Header />

            <main>
                <SectionFlashDeals />
                <SectionHowDoesItWork />
            </main>
        </>
    );
}

export default LandingPage;