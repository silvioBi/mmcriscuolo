import React from 'react';
import { Detail, Section } from '../detail/Detail';
import './Contacts.css'

export interface ContactsProps {
    img: string;
    sections: Section[];
}

const Contacts: React.SFC<ContactsProps> = ({ img, sections }) => (
    <div className='contacts-container'>
        <Detail
            img={img}
            title={'CONTACTS'}
            sections={sections}
        />
    </div>
);

export default Contacts;