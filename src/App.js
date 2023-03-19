import React from 'react';
import NavBar from './components/NavBar';
import Play from './pages/Play';
import Creation from './pages/Creation';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      savedCards: JSON.parse(localStorage.getItem('savedCards')) || [],
      creationMode: true,
      playMode: false,
    };
  }

  componentDidMount() {
    const { savedCards } = this.state;
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  }

  goCreationMode = () => {
    this.setState({ creationMode: true, playMode: false });
  }

  goPlayMode = () => {
    this.setState({ savedCards: JSON.parse(localStorage.getItem('savedCards')) }, () => {
      this.setState({ playMode: true, creationMode: false });
    });
  }

  render() {
    const {
      savedCards,
      creationMode,
      playMode,
    } = this.state;

    return (
      <main>
        <NavBar
          goCreationMode={ this.goCreationMode }
          goPlayMode={ this.goPlayMode }
        />

        {creationMode
          && (
            <Creation />
          )}

        {playMode
          && <Play savedCards={ savedCards } />}
      </main>
    );
  }
}

export default App;
