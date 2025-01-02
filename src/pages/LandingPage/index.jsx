import Header from '../../components/Header';
import SectionFlashDeals from '../../features/SectionFlashDeals';
import SectionHowDoesItWork from '../../features/SectionHowDoesItWork';
import SectionPopularItens from '../../features/SectionPopularItens';
import './style.css';

function LandingPage() {
    return (
        <>
            <Header />

            <main>
                <SectionFlashDeals />
                <SectionHowDoesItWork />
                <SectionPopularItens />
            </main>
        </>
    );
}

export default LandingPage;