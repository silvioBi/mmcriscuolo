import React from 'react';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Artworks from '../artworks/Artworks';
import autobind from 'autobind-decorator';
import content from '../../content'
import Exhibitions from '../exhibitions/Exhibitions';

interface AppState {
  currentTab: string;
}

export class App extends React.Component<{}, AppState> {
  state = {
    currentTab: 'home',
  }

  @autobind
  private toggleTab(currentTab: string) {
    this.setState({ currentTab })
  }

  public renderCurrentTab() {
    window.scrollTo(0, 0);
    if (this.state.currentTab === 'home')
      return <Home {...content.home}/>
    if (this.state.currentTab === 'artworks')
      return <Artworks {...content.artworks}/>
    if (this.state.currentTab === 'exhibitions')
      return <Exhibitions {...content.exhibitions}/>
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
