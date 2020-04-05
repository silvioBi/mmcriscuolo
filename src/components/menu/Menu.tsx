import React from 'react';
import './Menu.css';
interface MenuProps {
    onMenuItemClick: (value: string) => void;
}

class Menu extends React.Component<MenuProps, {}> {
    private renderMenuItem(label: string, value: string) {
        return <span key={value} className='navigation-item' onClick={() => this.props.onMenuItemClick(value)}>{label}</span>
    }
    public render() {
        return (
            <div className='menu'>
                <span className='title'>Michele Criscuolo</span>
                <div className='navigation'>
                    {this.renderMenuItem('Home', 'home')}
                    {this.renderMenuItem('Artworks', 'artworks')}
                    {this.renderMenuItem('Exibitions', 'exibitions')}
                    {this.renderMenuItem('Biography', 'biography')}
                    {this.renderMenuItem('Contact', 'contact')}
                </div>
            </div>
        );
    }
}

export default Menu;
