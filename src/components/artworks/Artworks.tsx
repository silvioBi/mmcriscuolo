import React from 'react';

import './Artworks.css';
import autobind from 'autobind-decorator';
import { CardWithImage } from '../cardWithImage/CardWithImage';

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
}

export default class Artworks extends React.Component<ArtworksProps, {}> {
    state = {
        categories: [],
        artworks: [],
        selectedCategories: {}
    }

    public componentDidMount() {
        let categories = new Set(),
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

    private renderArtwork(artwork: Artwork) {
        return <CardWithImage key={artwork.img} img={artwork.img} title={artwork.title} meta={artwork.meta} additionalInfo={artwork.year} />;
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
        return (
            <div className='category-selector'>
                {this.state.categories.map(this.renderCategoryCheckbox)}
            </div>
        );
    }

    private renderArtworks() {
        let artworks: Artwork[] = [],
            nothingSelected = Object.entries(this.state.selectedCategories).every(([category, selected]) => !selected);
        if (nothingSelected) {
            return <div className='cards'>{this.props.artworks.map(this.renderArtwork)}</div>;
        }
        Object.entries(this.state.selectedCategories).forEach(([category, selected]) => {
            if (!selected)
                return;
            this.state.artworks.forEach((artwork: Artwork) => {
                if (artwork.category === category)
                    artworks.push(artwork)
            });
        });

        return <div className='cards'>{artworks.map(this.renderArtwork)}</div>;
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
            </div>
        );
    }
}