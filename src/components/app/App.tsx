import React from 'react';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import autobind from 'autobind-decorator';
import content from '../../content'

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
    if (this.state.currentTab === 'home')
      return <Home menuImages={content.home.menuImages} cards={content.home.cards}/>
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
