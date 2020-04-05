import React from 'react';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import autobind from 'autobind-decorator';

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
      return <Home />
  }

  public render() {
    return (
      <>
        <Menu onMenuItemClick={this.toggleTab} selected={this.state.currentTab}/>
        {this.renderCurrentTab()}
        <Footer/>
      </>
    );
  }
}

export default App;
