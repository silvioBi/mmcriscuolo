import React from 'react';
import ParallaxImageSlideshow from '../parallax/Parallax';
import './Home.css'
import { CardWithImage, CardWithImageProps } from '../cardWithImage/CardWithImage';

export interface HomeProps {
    menuImages: string[];
    cards: CardWithImageProps[];
}

export class Home extends React.Component<HomeProps, {}> {
    private renderCard(card: CardWithImageProps) {
        return <CardWithImage img={card.img} title={card.title} meta={card.meta} additionalInfo={card.additionalInfo} />;
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
