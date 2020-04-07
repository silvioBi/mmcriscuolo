import artwork1 from './media/img/artworks/artwork-1.jpeg'
import artwork2 from './media/img/artworks/artwork-2.jpeg'
import artwork3 from './media/img/artworks/artwork-3.jpeg'
import artwork4 from './media/img/artworks/artwork-4.jpeg'
import artwork5 from './media/img/artworks/artwork-5.jpeg'
import artwork6 from './media/img/artworks/artwork-6.jpeg'
import artwork7 from './media/img/artworks/artwork-7.jpeg'
import artwork8 from './media/img/artworks/artwork-8.jpeg'
import artwork9 from './media/img/artworks/artwork-9.jpeg'

import exhibition1 from './media/img/exhibitions/exhibition-1.jpeg'
import exhibition2 from './media/img/exhibitions/exhibition-2.jpeg'
import exhibition3 from './media/img/exhibitions/exhibition-3.jpeg'
import exhibition4 from './media/img/exhibitions/exhibition-4.jpeg'
import exhibition5 from './media/img/exhibitions/exhibition-5.jpeg'

import bioImg from './media/img/bio/bio.png'

import { FooterProps } from './components/footer/Footer'
import { HomeInterface } from './components/home/Home'
import { ArtworksInterface } from './components/artworks/Artworks';
import { ExhibitionsInterface } from './components/exhibitions/Exhibitions';
import { BioProps } from './components/bio/Bio'

export interface Content {
    title: string;
    home: HomeInterface,
    artworks: ArtworksInterface;
    exhibitions: ExhibitionsInterface;
    bio: BioProps
    footer: FooterProps;
}

const content: Content = {
    title: 'MICHELE CRISCUOLO',
    home: {
        menuImages: [artwork1, artwork2],
        cards: [
            { img: artwork3, title: 'Some artwork name', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993', type: 'artworks' },
            { img: artwork4, title: 'Some other artwork', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993', type: 'artworks' },
            { img: artwork5, title: 'And another one', meta: 'Lorem ipsum sum', additionalInfo: '30 September 1993', type: 'artworks' },
            { img: exhibition1, title: 'Mostra dei quadri di Firenze', meta: 'Lorem ipsum sum', additionalInfo: 'From 2020-03-02 until 2020-03-02', type: 'exhibitions' },
            { img: exhibition2, title: 'Mostra Le Bellezze', meta: 'Lorem ipsum sum', additionalInfo: 'From 2020-03-02 until 2020-03-02', type: 'exhibitions' },
            { img: exhibition3, title: 'Una mostra superfiga', meta: 'Lorem ipsum sum', additionalInfo: 'From 2020-03-02 until 2020-03-02', type: 'exhibitions' },
            { img: exhibition4, title: 'E ancora una mostra superfiga', meta: 'Lorem ipsum sum', additionalInfo: 'From 2020-03-02 until 2020-03-02', type: 'exhibitions' },
        ],
    },
    artworks: {
        artworks: [
            { img: artwork3, title: 'Some artwork name', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'paintings', keywords: ['nature'], exhibitions: [] },
            { img: artwork4, title: 'Some other artwork', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'sculptures', keywords: ['woman'], exhibitions: [] },
            { img: artwork5, title: 'And another one', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'digital art', keywords: ['man'], exhibitions: [] },
            { img: artwork6, title: 'SOMETHING BLA', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'special', keywords: ['whatever'], exhibitions: [] },
            { img: artwork7, title: 'SOMETHING BLA', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'drawing', keywords: ['happiness'], exhibitions: [] },
            { img: artwork8, title: 'SOMETHING BLA', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'paintings', keywords: ['woman'], exhibitions: [] },
            { img: artwork9, title: 'SOMETHING BLA', technique: 'Poo on canvas', size: '23.7 x 23.7 x 0.5 cm', meta: 'Lorem ipsum sum', year: '1993', category: 'sculptures', keywords: ['woman'], exhibitions: [] },
        ],
    },
    exhibitions: {
        exhibitions: [
            { img: exhibition1, name: 'Mostra dei quadri di Firenze', from: '2020-03-02', until: '2020-03-02', place: 'Galleria degli Uffizi, Roma', descriptionShort: 'A short description for this exhibition', galleryImages: [exhibition2, exhibition3, exhibition4, exhibition5], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { img: exhibition2, name: 'Mostra Le Bellezze', from: '2020-03-02', until: '2020-03-02', place: 'Galleria degli Uffizi, Roma', descriptionShort: 'A short description for this exhibition', galleryImages: [exhibition2, exhibition3, exhibition4, exhibition5], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { img: exhibition3, name: 'Una mostra superfiga', from: '2020-03-02', until: '2020-03-02', place: 'Galleria degli Uffizi, Roma', descriptionShort: 'A short description for this exhibition', galleryImages: [exhibition2, exhibition3, exhibition4, exhibition5], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { img: exhibition4, name: 'E ancora una mostra superfiga', from: '2020-03-02', until: '2020-03-02', place: 'Galleria degli Uffizi, Roma', descriptionShort: 'A short description for this exhibition', galleryImages: [exhibition2, exhibition3, exhibition4, exhibition5], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { img: exhibition5, name: 'Exhibition in Rome', from: '2020-03-02', until: '2020-03-02', place: 'Galleria degli Uffizi, Roma', descriptionShort: 'A short description for this exhibition', galleryImages: [exhibition2, exhibition3, exhibition4, exhibition5], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        ],
    },
    bio: {
        img: bioImg,
        sections: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?']
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