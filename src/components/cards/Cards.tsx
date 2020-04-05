import React from 'react';
import './Cards.css';
import autobind from 'autobind-decorator';
interface Card {
    img: string;
    caption: JSX.Element | string;
}
interface CardsProps {
    cards: Card[];
}

class Cards extends React.Component<CardsProps, {}> {
    @autobind
    private renderCard(card: Card) {
        return (
            <div key={card.img} className='card'>
                <img src={card.img} alt=''></img>
                {card.caption}
            </div>
        );
    }

    public render() {
        return (
            <div className='cards'>
                {this.props.cards.map(this.renderCard)}
            </div>
        );
    }
}

export default Cards;
