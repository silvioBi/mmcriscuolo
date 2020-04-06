import React from 'react';
import './Menu.css';
export interface MenuProps {
    onMenuItemClick: (value: string, selectedElement: string | null, selectedElementType: string | null) => void;
    title: string;
    selected: string;
}

class Menu extends React.Component<MenuProps, {}> {
    private renderMenuItem(label: string, value: string) {
        let className = this.props.selected === value ? 'navigation-item selected' : 'navigation-item';
        return (
            <span
                key={value}
                className={className}
                onClick={() => this.props.onMenuItemClick(value, null, null)}>{label}
            </span>
        );
    }
    public render() {
        return (
            <div className='menu'>
                <div className='title'>{this.props.title}</div>
                <div className='navigation'>
                    {this.renderMenuItem('HOME', 'home')}
                    {this.renderMenuItem('ARTWORKS', 'artworks')}
                    {this.renderMenuItem('EXHIBITIONS', 'exhibitions')}
                    {this.renderMenuItem('BIOGRAPHY', 'biography')}
                    {this.renderMenuItem('CONTACT', 'contact')}
                </div>
            </div>
        );
    }
}

export default Menu;
