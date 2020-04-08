import React from 'react';
import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';
import autobind from 'autobind-decorator';
import './Parallax.css';

interface ParallaxImageSlideshowState {
    layer: BannerLayer;
    intervalId: NodeJS.Timeout | null;
    current: number;
    loaded: boolean[];
    allLoaded: boolean;
}

interface ParallaxImageSlideshowProps {
    images: string[];
    secondsInterval: number
}

class ParallaxImageSlideshow extends React.Component<ParallaxImageSlideshowProps, ParallaxImageSlideshowState> {

    public componentDidMount() {
        this.setState({
            layer: {
                image: this.props.images?.[0],
                amount: 0.8,
                children: null,
            },
            loaded: Array(this.props.images.length).fill(false),
            allLoaded: false,
            intervalId: null,
            current: 0,
        })
    }

    @autobind
    private checkIfAllLoadedAndStartSlideshow(imgIdx: number) {
        let loaded: boolean[] = [...this.state.loaded];
        loaded[imgIdx] = true;
        if (loaded.every(imgLoaded => imgLoaded) && !this.state.allLoaded) {
            this.setState({
                allLoaded: true,
                loaded,
                intervalId: setInterval(this.toggeImage, this.props.secondsInterval * 1000),
            });
        }
        else
            this.setState({ loaded });
    }

    public componentDidUpdate() {
        for (let i = 0; i < this.props.images.length; i++) {
            if (this.state.loaded[i])
                continue
            const img = new Image();
            img.src = this.props.images[i]; // by setting an src, you trigger browser download
            img.onload = () => this.checkIfAllLoadedAndStartSlideshow(i);
        }
    }

    public componentWillUnmount() {
        if (this.state.intervalId == null)
            return;
        let intervalId: NodeJS.Timeout = this.state.intervalId as unknown as NodeJS.Timeout;
        clearInterval(intervalId);
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
        if (this.state == null) {
            return null;
        }

        return (
            <ParallaxBanner
                layers={[this.state.layer]}
                style={{ height: `${window.innerHeight - 168}px` }}
            />
        );
    }
}

export default ParallaxImageSlideshow;