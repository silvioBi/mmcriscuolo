import React from 'react';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Artworks from '../artworks/Artworks';
import autobind from 'autobind-decorator';
import content from '../../content'
import Exhibitions from '../exhibitions/Exhibitions';
import Bio from '../bio/Bio';

interface AppState {
  currentTab: string;
  selectedElement: string | null;
  selectedElementType: string | null;
}

export class App extends React.Component<{}, AppState> {
  state = {
    currentTab: 'home',
    selectedElement: null,
    selectedElementType: null,
  }

  @autobind
  private toggleTab(currentTab: string, selectedElement: string | null, selectedElementType: string | null) {
    this.setState({ currentTab, selectedElement, selectedElementType })
  }

  public renderCurrentTab() {
    window.scrollTo(0, 0);
    const {selectedElement, selectedElementType} = this.state;
    if (this.state.currentTab === 'home')
      return <Home {...content.home} onCardClick={this.toggleTab}/>
    if (this.state.currentTab === 'biography')
      return <Bio {...content.bio} />
    if (this.state.currentTab === 'artworks')
      return <Artworks {...content.artworks} selectedElement={selectedElementType === 'artworks' ? selectedElement : null}/>
    if (this.state.currentTab === 'exhibitions')
      return <Exhibitions {...content.exhibitions} selectedElement={selectedElementType === 'exhibitions' ? selectedElement : null}/>
  }

  public render() {
    return (
      <>
        <Menu onMenuItemClick={this.toggleTab} selected={this.state.currentTab} title={content.title}/>
        {this.renderCurrentTab()}
        <Footer {...content.footer}/>
      </>
    );
  }
}

export default App;
