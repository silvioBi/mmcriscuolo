import React from 'react';
import './CardWithImage.css';
import Caption from '../caption/Caption';

export interface Card {
    img: string;
    title: string;
    meta: string;
    additionalInfo: string;    
    type: string;
}

export interface CardWithImageProps extends Card {
    onClick?: (card: Card) => void;
}

export class CardWithImage extends React.Component<CardWithImageProps, {}> {
    public render() {
        const { img, title, meta, additionalInfo, type } = this.props;
        return (
            <div
                key={img + title}
                className='card'
                onClick={() => this.props.onClick != null ? this.props.onClick({ img, title, meta, additionalInfo, type }) : null}
            >
                <img src={img} alt={title}></img>
                <Caption title={title} text={meta} additionalInfo={additionalInfo} />
            </div>
        );
    }
}