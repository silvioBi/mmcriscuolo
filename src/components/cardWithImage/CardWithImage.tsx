import React from 'react';
import './CardWithImage.css';
import Caption from '../caption/Caption';

export interface CardWithImageProps {
    img: string;
    title: string;
    meta: string;
    additionalInfo: string;
}

export class CardWithImage extends React.Component<CardWithImageProps, {}> {
    public render() {
        const {img, title, meta, additionalInfo} = this.props;
        return (
            <div key={img} className='card'>
                <img src={img} alt={title}></img>
                <Caption title={title} text={meta} additionalInfo={additionalInfo} />
            </div>
        );
    }
}