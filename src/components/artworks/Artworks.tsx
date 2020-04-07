import React from 'react';

import './Artworks.css';
import autobind from 'autobind-decorator';
import { CardWithImage, Card } from '../cardWithImage/CardWithImage';
import { Detail } from '../detail/Detail';

export interface Artwork {
    title: string;
    img: string;
    meta: string;
    year: string;
    technique: string;
    size: string;
    category: string;
    keywords: string[];
    exhibitions: string[];
}

export interface ArtworksInterface {
    artworks: Artwork[];
}

export interface ArtworksProps extends ArtworksInterface {
    selectedElement: string | null;
}

export interface ArtworksState {
    categories: string[];
    selectedCategories: { [category: string]: boolean }
    artworks: Artwork[];
    selectedArtwork: Artwork | null;
    lastY: number;
}

export default class Artworks extends React.Component<ArtworksProps, ArtworksState> {
    state = {
        categories: [],
        artworks: [],
        selectedCategories: {},
        selectedArtwork: null,
        lastY: 0,
    }

    public componentDidMount() {
        let categories: Set<string> = new Set(),
            artworks: Artwork[] = [],
            selectedCategories: { [category: string]: boolean } = {},
            selectedArtwork: Artwork | null = null;

        if (this.props.selectedElement != null) {
            selectedArtwork = this.props.artworks.find(artwork => artwork.title === this.props.selectedElement) ?? null;
        }

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
            selectedArtwork,
        }, () => selectedArtwork ? (window.innerWidth > 600 ? window.scrollTo(0, 300) : window.scrollTo(0, 280)) : null)
    }

    @autobind
    private renderArtworkPreview(artwork: Artwork) {
        return <CardWithImage
            key={artwork.img + artwork.title}
            img={artwork.img}
            title={artwork.title}
            meta={artwork.meta}
            type={'artwork'}
            additionalInfo={artwork.year}
            onClick={(card: Card) => {
                this.setState({
                    selectedArtwork: this.state.artworks.find((artwork: Artwork) => artwork.img === card.img) ?? null,
                    lastY: window.scrollY,
                }, () => window.innerWidth > 600 ? window.scrollTo(0, 300) : window.scrollTo(0, 280));
            }}
        />;
    }

    @autobind
    private toggleCategory(category: string, checked: boolean) {
        this.setState({ selectedCategories: { ...this.state.selectedCategories, [category]: checked } });
    }

    @autobind
    private renderCategoryCheckbox(category: string) {
        let selectedCategories: { [category: string]: boolean } = this.state.selectedCategories;
        return (
            <div key={category} className='category-checkbox-container'>
                <label>
                    <input
                        key={category}
                        className='regular-checkbox'
                        type="checkbox"
                        onChange={e => this.toggleCategory(category, e.target.checked)}
                        checked={selectedCategories[category]}
                    />
                    &nbsp;{category.toLocaleUpperCase()}
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

    @autobind
    private hideDetail() {
        const lastY = this.state.lastY
        this.setState({ selectedArtwork: null, lastY: 0 }, () => {
            window.scrollTo(0, lastY);
        });
    }

    private selectCategoryFromDetail(category: string) {
        this.toggleCategory(category, true);
        this.hideDetail();
    }

    private renderCategoryDetail(category: string) {
        return (
            <span
                className='category-detail'
                onClick={() => this.selectCategoryFromDetail(category)}
            >
                {category.toUpperCase()}
            </span>
        );
    }

    @autobind
    private renderSelectedArtwork() {
        if (this.state.selectedArtwork == null) {
            return null;
        }
        const artwork: Artwork = this.state.selectedArtwork as unknown as Artwork;
        return (
            <Detail
                title={`${artwork.title}, ${artwork.year}`}
                img={artwork.img}
                sections={[
                    {
                        content: <>{artwork.meta}<br /><br /><i>{artwork.technique}</i><br /><br />{artwork.size}</>
                    },
                    {
                        title: 'FIND SIMILAR ARTWORKS',
                        content: this.renderCategoryDetail(artwork.category)
                    },
                    {
                        content: <i className='link-back-to-artworks' onClick={this.hideDetail}>Go back to the artworks list</i>
                    },
                ]}
            />
        );
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