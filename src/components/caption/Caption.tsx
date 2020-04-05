import React from 'react';
import './Caption.css';

// const Caption = ({ title, text, additionalInfo }) => (
interface CaptionProps {
    title:string;
    text: string;
    additionalInfo: string;
}
const Caption: React.SFC<CaptionProps> = (props) => (
    <div className='caption'>
        <div className='caption-title'>{props.title}</div>
        <div className='caption-text'>{props.text}</div>
        {props.additionalInfo ? <div className='caption-additional-info'>{props.additionalInfo}</div> : null}
    </div>
);

export default Caption;