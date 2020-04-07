import React from 'react';
import { CardWithImage, Card } from '../cardWithImage/CardWithImage';
import autobind from 'autobind-decorator';
import './Exhibitions.css'

import Slider from "react-slick";

export interface Exhibition {
    name: string;
    img: string;
    description: string;
    descriptionShort: string;
    place: string;
    from: string;
    until: string;
    galleryImages: string[];
}

export interface ExhibitionsState {
    selectedExhibition: Exhibition | null;
    lastY: number;
}
export interface ExhibitionsInterface {
    exhibitions: Exhibition[];
}


export interface ExhibitionsProps extends ExhibitionsInterface {
    selectedElement: string | null;
}


export default class Exhibitions extends React.Component<ExhibitionsProps, ExhibitionsState> {
    state = {
        selectedExhibition: null,
        lastY: 0,
    }

    public componentDidMount() {
        const selectedExhibition = this.props.exhibitions.find(exhibition => exhibition.name === this.props.selectedElement) ?? null;
        if (selectedExhibition) {
            (window.innerWidth > 600 ? window.scrollTo(0, 170) : window.scrollTo(0, 140))
            this.setState({ selectedExhibition })
        }
    }

    @autobind
    private hideSelectedExhibition() {
        const lastY = this.state.lastY
        this.setState({ selectedExhibition: null, lastY: 0 }, () => {
            window.scrollTo(0, lastY);
        });
    }

    private renderSlideshow() {
        const exhibition: Exhibition = this.state.selectedExhibition as unknown as Exhibition,
            settings = {
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    },
                ]
            };

        return (
            <div className='slider-container'>
                <Slider {...settings}>
                    {exhibition.galleryImages.map(image => <div key={image}><img src={image} alt=''/></div>)}
                </Slider>
            </div>
        )
    }

    private renderSelectedExhibition() {
        if (this.state.selectedExhibition == null) {
            return null;
        }
        const exhibition: Exhibition = this.state.selectedExhibition as unknown as Exhibition;
        return (
            <div className='exhibition-detail'>
                <div className='exhibition-name'>
                    {exhibition.name.toUpperCase()}
                </div>
                <div className='exhibition-place'>
                    {exhibition.place}
                </div>
                <div className='exhibition-date'>
                    {exhibition.from} - {exhibition.until}
                </div>
                <div className='exhibition-short-description'>
                    {exhibition.descriptionShort}
                </div>
                {this.renderSlideshow()}
                <div className='exhibition-long-description'>
                    {exhibition.description}
                </div>
                <div className='exhibition-link-back-container'>
                    <i className='link-back-to-exhibitions' onClick={this.hideSelectedExhibition}>
                        Go back to the exhibitions list
                        </i>
                </div>
            </div>
        );
    }

    @autobind
    private renderExhibitionPreview(exhibition: Exhibition) {
        return <CardWithImage
            key={exhibition.img}
            img={exhibition.img}
            title={exhibition.name}
            meta={exhibition.descriptionShort}
            type={'exhibition'}
            additionalInfo={`From ${exhibition.from} until ${exhibition.until}`}
            onClick={(card: Card) => this.setState({
                selectedExhibition: this.props.exhibitions.find((exhibition: Exhibition) => exhibition.img === card.img) ?? null,
                lastY: window.scrollY,
            }, () => (window.innerWidth > 600 ? window.scrollTo(0, 170) : window.scrollTo(0, 140)))}
        />;
    }

    private renderExhibitions() {
        if (this.state.selectedExhibition != null) {
            return null;
        }
        return (
            <>
                <div className='exhibitions-title'>EXHIBITIONS</div>
                <div className='cards'>{this.props.exhibitions.map(this.renderExhibitionPreview)}</div>
            </>
        );
    }

    public render() {
        return (
            <div className='exhibitions'>
                {this.renderExhibitions()}
                {this.renderSelectedExhibition()}
            </div>
        );
    }
}