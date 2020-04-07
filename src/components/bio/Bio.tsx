import React from 'react';
import { Detail } from '../detail/Detail';
import './Bio.css'

export interface BioProps {
    img: string;
    sections: string[];
}

const Bio: React.SFC<BioProps> = ({ img, sections }) => (
    <div className='bio-container'>
        <Detail
            img={img}
            title={'BIOGRAPHY'}
            sections={sections.map(section => ({ content: section }))}
        />
    </div>
);

export default Bio;