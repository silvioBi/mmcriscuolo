import React from 'react';

import './Artworks.css';
import autobind from 'autobind-decorator';
import { CardWithImage, Card } from '../cardWithImage/CardWithImage';

export interface Artwork {
    title: string;
    img: string;
    meta: string;
    year: string;
    category: string;
    keywords: string[];
}

export interface ArtworksProps {
    artworks: Artwork[];
}

export interface ArtworksState {
    categories: string[];
    selectedCategories: { [category: string]: boolean }
    artworks: Artwork[];
    selectedArtwork: Artwork | null;
}

export default class Artworks extends React.Component<ArtworksProps, ArtworksState> {
    state = {
        categories: [],
        artworks: [],
        selectedCategories: {},
        selectedArtwork: null,
    }

    public componentDidMount() {
        let categories: Set<string> = new Set(),
            artworks: Artwork[] = [],
            selectedCategories: { [category: string]: boolean } = {};
        this.props.artworks.forEach(artwork => {
            categories.add(artwork.category);
            artworks.push(artwork);
            if (artwork.category in selectedCategories)
                selectedCategories[artwork.category] = false;
        });
        this.setState({
            categories: Array.from(categories.values()),
            artworks,
            selectedCategories,
        })
    }

    @autobind
    private renderArtworkPreview(artwork: Artwork) {
        return <CardWithImage
            key={artwork.img}
            img={artwork.img}
            title={artwork.title}
            meta={artwork.meta}
            additionalInfo={artwork.year}
            onClick={(card: Card) => this.setState({
                selectedArtwork: this.state.artworks.find((artwork: Artwork) => artwork.img === card.img) ?? null
            })}
        />;
    }

    @autobind
    private renderCategoryCheckbox(category: string) {
        return (
            <div key={category} className='category-checkbox-container'>
                <label>
                    <input
                        key={category}
                        className='regular-checkbox'
                        type="checkbox"
                        onChange={e => this.setState({ selectedCategories: { ...this.state.selectedCategories, [category]: e.target.checked } })}
                    />
                    {category.toLocaleUpperCase()}
                </label>
            </div>
        )
    }

    private renderCategorySelector() {
        if (this.state.selectedArtwork != null) {
            return null;
        }
        return (
            <div className='category-selector'>
                {this.state.categories.map(this.renderCategoryCheckbox)}
            </div>
        );
    }

    private renderArtworks() {
        if (this.state.selectedArtwork != null) {
            return null;
        }
        let artworks: Artwork[] = [],
            nothingSelected = Object.entries(this.state.selectedCategories).every(([category, selected]) => !selected);
        if (nothingSelected) {
            return <div className='cards'>{this.props.artworks.map(this.renderArtworkPreview)}</div>;
        }
        Object.entries(this.state.selectedCategories).forEach(([category, selected]) => {
            if (!selected)
                return;
            this.state.artworks.forEach((artwork: Artwork) => {
                if (artwork.category === category)
                    artworks.push(artwork)
            });
        });

        return <div className='cards'>{artworks.map(this.renderArtworkPreview)}</div>;
    }

    private renderSelectedArtwork() {
        if (this.state.selectedArtwork == null) {
            return null;
        }
        const artwork: Artwork = this.state.selectedArtwork as unknown as Artwork;
        return artwork.title;
    }

    public render() {
        if (this.state.categories.length === 0) {
            return null;
        }
        return (
            <div className='artworks'>
                <div className='artworks-title'>ARTWORKS</div>
                {this.renderCategorySelector()}
                {this.renderArtworks()}
                {this.renderSelectedArtwork()}
            </div>
        );
    }
}