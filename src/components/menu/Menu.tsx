import React from 'react';
import './Menu.css';
interface MenuProps {
    onMenuItemClick: (value: string) => void;
    selected: string;
}

class Menu extends React.Component<MenuProps, {}> {
    private renderMenuItem(label: string, value: string) {
        let className = this.props.selected === value ? 'navigation-item selected' : 'navigation-item';
        return (
            <span
                key={value}
                className={className}
                onClick={() => this.props.onMenuItemClick(value)}>{label}
            </span>
        );
    }
    public render() {
        return (
            <div className='menu'>
                <div className='title'>MICHELE CRISCUOLO</div>
                <div className='navigation'>
                    {this.renderMenuItem('HOME', 'home')}
                    {this.renderMenuItem('ARTWORKS', 'artworks')}
                    {this.renderMenuItem('EXIBITIONS', 'exibitions')}
                    {this.renderMenuItem('BIOGRAPHY', 'biography')}
                    {this.renderMenuItem('CONTACT', 'contact')}
                </div>
            </div>
        );
    }
}

export default Menu;
