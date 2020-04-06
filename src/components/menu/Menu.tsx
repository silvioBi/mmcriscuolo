import React from 'react';
import './Menu.css';

export interface MenuProps {
    onMenuItemClick: (value: string, selectedElement: string | null, selectedElementType: string | null) => void;
    title: string;
    selected: string;
}

export interface MenuState {
    hamburgerState: string;
}

class Menu extends React.Component<MenuProps, MenuState> {
    state = {
        hamburgerState: 'closed',
    }

    private renderMenuItem(label: string, value: string) {
        let className = this.props.selected === value ? 'navigation-item selected' : 'navigation-item';
        return (
            <span
                key={value}
                className={className}
                onClick={() => {
                    this.props.onMenuItemClick(value, null, null);
                    this.setState({hamburgerState: 'closed'});
                    }}>{label}
            </span>
        );
    }
    public render() {
        let hamburgerDropdownClassName = this.state.hamburgerState === 'closed' ? 
        'hamburger-menu-dropdown closed' : 
        'hamburger-menu-dropdown open';
        return (
            <div className='menu'>
                <div className='title'>
                    {this.props.title}
                </div>
                <div className='navigation'>
                    {this.renderMenuItem('HOME', 'home')}
                    {this.renderMenuItem('ARTWORKS', 'artworks')}
                    {this.renderMenuItem('EXHIBITIONS', 'exhibitions')}
                    {this.renderMenuItem('BIOGRAPHY', 'biography')}
                    {this.renderMenuItem('CONTACT', 'contact')}
                </div>
                <div className="hamburger-menu-container" onClick={
                    () => this.setState({ hamburgerState: this.state.hamburgerState === 'open' ? 'closed' : 'open' })
                }>
                    <div id="hamburger-menu" className={this.state.hamburgerState}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={hamburgerDropdownClassName}>
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
