import ListFlashDealCard from '../../components/ListFlashDealCard';
import IconSelectLocalizacao from '../../assets/img/select-localizacao.svg';
import IconChose from '../../assets/img/chose.svg';
import IconPlayAdvanced from '../../assets/img/Pay-advanced.svg';
import IconEjoyMeals from '../../assets/img/Enjoy-meals.svg';
import './style.css';

function SectionHowDoesItWork() {
    return (
        <section className='how-does'>
            <ListFlashDealCard />

            <div className='div-how-does'>
                <h2>How does it work</h2>

                <div className='div-how-does-list'>
                    <div className='list-item'>
                        <img src={IconSelectLocalizacao} alt="icon how does list" />

                        <div className='body'>
                            <h3>Select location</h3>
                            <p>Choose the location where your food will be delivered</p>
                        </div>
                    </div>

                    <div className='list-item'>
                        <img src={IconChose} alt="icon how does list" />

                        <div className='body'>
                            <h3>Choose order</h3>
                            <p>Check over hundreds of menus to pick your favorite food</p>
                        </div>
                    </div>

                    <div className='list-item'>
                        <img src={IconPlayAdvanced} alt="icon how does list" />

                        <div className='body'>
                            <h3>Pay advanced</h3>
                            <p>It's quick, safe, and simple. Select several methods of payment</p>
                        </div>
                    </div>

                    <div className='list-item'>
                        <img src={IconEjoyMeals} alt="icon how does list" />

                        <div className='body'>
                            <h3>Enjoy meals</h3>
                            <p>Food is made and delivered directly to your home</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionHowDoesItWork;