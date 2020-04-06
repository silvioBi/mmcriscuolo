import React from "react";
import './Detail.css';

export interface Section {
    title?: string;
    content: string | JSX.Element;
}
export interface DetailProps {
    img: string;
    title: string;
    sections: Section[];
    onClose: () => void;
}

export class Detail extends React.Component<DetailProps, {}> {
    private renderSection(section: Section, idx: number) {
        return (
            <div key={`section-${idx}`} className='section'>
                {section.title ? <span className='section-title'>{section.title}</span> : null}
                {section.content}
            </div>
        )
    }
    public render() {
        return (
            <div className='detail'>
                <div className='detail-image-container'>
                    <img className='detail-image' src={this.props.img} alt={this.props.title} />
                </div>
                <div className='detail-title-and-sections-container'>
                    <div className='detail-title-container'>
                        {this.props.title}
                    </div>
                    <div className='detail-sections-container'>
                        {this.props.sections.map(this.renderSection)}
                    </div>
                </div>
            </div>
        )
    }
}