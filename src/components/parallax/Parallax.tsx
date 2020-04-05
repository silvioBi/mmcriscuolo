import React from 'react';
import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';
import autobind from 'autobind-decorator';
import './Parallax.css';

interface ParallaxImageSlideshowState {
    layer: BannerLayer;
    intervalId: NodeJS.Timeout;
    current: number;
}

interface ParallaxImageSlideshowProps {
    images: string[];
    secondsInterval: number
}

class ParallaxImageSlideshow extends React.Component<ParallaxImageSlideshowProps, ParallaxImageSlideshowState> {
    public componentWillMount() {
        this.setState({
            layer: {
                image: this.props.images?.[0],
                amount: 0.8,
                children: null,
            },
            intervalId: setInterval(this.toggeImage, this.props.secondsInterval * 1000),
            current: 0,
        });
    }

    @autobind
    private toggeImage() {
        let nextImageIdx = this.state.current + 1 < this.props.images.length ? this.state.current + 1 : 0;
        this.setState({
            layer: {
                image: this.props.images[nextImageIdx],
                amount: 0.8,
                children: null,
            },
            current: nextImageIdx,
        });
    }

    public render() {
        if(this.state.layer == null) {
            return null;
        }

        return (
            <ParallaxBanner
                layers={[this.state.layer]}
                style={{height: '500px'}}
            />
        );
    }
}

export default ParallaxImageSlideshow;