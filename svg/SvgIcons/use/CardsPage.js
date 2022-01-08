import React from 'react';
import './CardPage.scss';
import { useFetch } from '../Hooks/useFetch';
import { useCardQuantity } from '../Hooks/useCardQuantity';
import RepeatCard from './RepeatCard';
import Card from '../Card/Card';
import SvgIcons from '../SvgIcons';

const CardsPage  = () => {
    const { responce } = useFetch();
    const { cardQuantity, setCardQuantity } = useCardQuantity();

    const handleShow = () => {
        setCardQuantity(responce.length)
    }

    return (
        <div className="main">
            <h2 className="main__title">Похожие объявления</h2>
            <div className="main__container">
                <RepeatCard quantity={cardQuantity} data={responce}>
                    {(index) => (
                        <Card key={responce[index].date}
                            param={responce[index]}
                            imgSrc="https://source.unsplash.com/random"
                        />
                    )}
                </RepeatCard>
            </div>
            <button className="main__show" onClick={handleShow}>
                <span>Показать еще</span>
                <SvgIcons
                    name="arrow"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}
export default CardsPage;