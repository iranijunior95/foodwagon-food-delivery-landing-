import Header from '../../components/Header';
import './style.css';

function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <section className='flash-deals'>
                    <div className='are-you'>
                        <div className='are-you-titulos'>
                            <h1>Are you starving?</h1>
                            <span>Within a few clicks, find meals that are accessible near you</span>
                        </div>
                    </div>

                    <div className='flash-img-container'></div>
                </section>
            </main>
        </>
    );
}

export default LandingPage;