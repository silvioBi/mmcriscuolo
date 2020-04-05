import React from 'react';
import './Caption.css';

const Caption = ({ title, text, date }) => (
    <div className='caption'>
        <div className='caption-title'>{title}</div>
        <div className='caption-text'>{text}</div>
        {date ? <div className='caption-date'>{date}</div> : null}
    </div>
);

export default Caption;