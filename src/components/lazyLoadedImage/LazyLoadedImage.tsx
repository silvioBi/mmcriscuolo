import './LazyLoadedImage.css'
import React from 'react';
import autobind from 'autobind-decorator';

export interface LazyLoadedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export interface LazyLoadedImageState {
    loaded: boolean;
}

export class LazyLoadedImage extends React.Component<LazyLoadedImageProps, {}> {
    state = {
        loaded: false
    };
    private ref = React.createRef<HTMLDivElement>();

    @autobind
    private setLoadingCompleted() {
        this.setState({ loaded: true })
    }

    @autobind
    private loadImage(entry: IntersectionObserverEntry) {
        if (!entry.isIntersecting)
            return
        if (this.state.loaded)
            return
        const img = new Image();
        img.src = this.props.src; // by setting an src, you trigger browser download
        img.onload = this.setLoadingCompleted;
    }


    public componentDidMount() {
        let observer = new IntersectionObserver(
            (entries, observer) => entries.forEach(this.loadImage),
            { rootMargin: "0px 0px -200px 0px" }
        );

        observer.observe(this.ref.current as Element)
    }

    public render() {
        const { src, alt, className, width, height } = this.props;
        if (!this.state.loaded)
            return (
                <div ref={this.ref} style={{ "height": height, "width": width }}>
                    <div className="placeholder-content" >
                        <div className="placeholder-content_item"></div>
                    </div>
                </div>
            );
        return <img src={src} className={className} alt={alt} width={width} height={width} />;
    }
}