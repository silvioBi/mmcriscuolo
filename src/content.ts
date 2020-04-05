import artwork1 from './media/img/artworks/artwork-1.jpeg'
import artwork2 from './media/img/artworks/artwork-2.jpeg'
import artwork3 from './media/img/artworks/artwork-3.jpeg'
import artwork4 from './media/img/artworks/artwork-4.jpeg'
import artwork5 from './media/img/artworks/artwork-5.jpeg'
import artwork6 from './media/img/artworks/artwork-6.jpeg'
import artwork7 from './media/img/artworks/artwork-7.jpeg'
import artwork8 from './media/img/artworks/artwork-8.jpeg'
import artwork9 from './media/img/artworks/artwork-9.jpeg'

import { FooterProps } from './components/footer/Footer'
import { HomeProps } from './components/home/Home'

export interface Content {
    title: string;
    home: HomeProps,
    footer: FooterProps;
}

const content: Content = {
    title: 'MICHELE CRISCUOLO',
    home: {
        menuImages: [artwork1, artwork2],
        cards: [
            { img: artwork3, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork4, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork5, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork6, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork7, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork8, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
            { img: artwork9, title: 'SOMETHING BLA', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993' },
        ],
    },
    footer: {
        copyrightMessage: 'COPYRIGHT © 2020 MICHELE CRISCUOLO',
        social: {
            facebook: 'my-link-to-social',
            instagram: 'my-link-to-social',
            linkedin: 'my-link-to-social',
            pinterest: 'my-link-to-social',
            twitter: 'my-link-to-social',
            whatsapp: 'my-link-to-social',
        }
    }
};

export default content;