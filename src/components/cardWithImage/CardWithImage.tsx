import React from 'react';
import './CardWithImage.css';
import Caption from '../caption/Caption';

export interface Card {
    img: string;
    title: string;
    meta: string;
    additionalInfo: string;
}

export interface CardWithImageProps extends Card {
    onClick?: (card: Card) => void;
}

export class CardWithImage extends React.Component<CardWithImageProps, {}> {
    public render() {
        const { img, title, meta, additionalInfo } = this.props;
        return (
            <div
                key={img}
                className='card'
                onClick={() => this.props.onClick != null ? this.props.onClick({ img, title, meta, additionalInfo }) : null}
            >
                <img src={img} alt={title}></img>
                <Caption title={title} text={meta} additionalInfo={additionalInfo} />
            </div>
        );
    }
}