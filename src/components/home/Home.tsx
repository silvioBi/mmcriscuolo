import React from 'react';
import ParallaxImageSlideshow from '../parallax/Parallax';
import { CardWithImage, CardWithImageProps } from '../cardWithImage/CardWithImage';
import autobind from 'autobind-decorator';

export interface HomeInterface {
    menuImages: string[];
    cards: CardWithImageProps[];
}
export interface HomeProps extends HomeInterface {
    onCardClick: (cardType: string, selectedElement: string | null, selectedElementType: string | null) => void;
}

export class Home extends React.Component<HomeProps, {}> {
    @autobind
    private renderCard(card: CardWithImageProps) {
        return (
            <CardWithImage
                key={card.img + card.title}
                img={card.img}
                title={card.title}
                meta={card.meta}
                additionalInfo={card.additionalInfo}
                type={card.type}
                onClick={() => this.props.onCardClick(card.type, card.title, card.type)}
            />
        );
    }

    public render() {
        return (
            <>
                <ParallaxImageSlideshow images={this.props.menuImages} secondsInterval={6} />
                <div className='cards'>
                    {this.props.cards.map(this.renderCard)}
                </div>
            </>
        );
    }
}

export default Home;
