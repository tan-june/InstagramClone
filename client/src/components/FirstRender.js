import React from 'react';
import StartScreen from './StartScreen';
import HomePage from './HomePage';
import NewPost from './NewPost';

class FirstRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'startScreen', 
    };
  }

  changeState = (val) => {
    this.setState({currentPage: val});
  }

  renderContent() {
    switch (this.state.currentPage) {

      case 'newPost':
        return <NewPost changeScreen={this.changeState} />

      case 'homePage':
        return <HomePage changeScreen={this.changeState} />

      case 'startScreen':
      default:
        return <StartScreen changeScreen={this.changeState} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default FirstRender;