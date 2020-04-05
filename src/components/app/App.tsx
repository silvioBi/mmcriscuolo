import React from 'react';
import Menu from '../menu/Menu';
import Home from '../home/Home';
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
        <Menu onMenuItemClick={this.toggleTab} />
        {this.renderCurrentTab()}
      </>
    );
  }
}

export default App;
