import { FooterProps } from './components/footer/Footer'
import { HomeInterface } from './components/home/Home'
import { ArtworksInterface } from './components/artworks/Artworks';
import { ExhibitionsInterface } from './components/exhibitions/Exhibitions';
import { BioProps } from './components/bio/Bio'
import { ContactsProps } from './components/contacts/Contacts'

import data from './content.json';

export interface Content {
    title: string;
    home: HomeInterface,
    artworks: ArtworksInterface;
    exhibitions: ExhibitionsInterface;
    bio: BioProps
    contacts: ContactsProps,
    footer: FooterProps;
}
const content: Content = data;

export default content;