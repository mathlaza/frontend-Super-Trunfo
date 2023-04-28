import React from 'react';
import NavBar from './components/NavBar';
import Play from './pages/Play';
import Creation from './pages/Creation';
import Instructions from './pages/Instructions';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      savedCards: JSON.parse(localStorage.getItem('savedCards')) || [],
      creationMode: true,
      playMode: false,
      buttonPlayEnable: false,
      instructionMode: false,
    };
  }

  componentDidMount() {
    const { savedCards } = this.state;
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
    this.enablePlayMode();
  }

  goCreationMode = () => {
    this.setState({ creationMode: true, playMode: false, instructionMode: false });
  }

  goPlayMode = () => {
    this.setState({ savedCards: JSON.parse(localStorage.getItem('savedCards')) }, () => {
      this.setState({ playMode: true, creationMode: false, instructionMode: false });
    });
  }

  enablePlayMode = () => {
    const deckSize = JSON.parse(localStorage.getItem('savedCards')).length;
    const minCardAmount = 4;
    this.setState({ buttonPlayEnable: deckSize >= minCardAmount });
  }

  goInstructionMode = () => {
    this.setState({ instructionMode: true, creationMode: false, playMode: false });
  }

  render() {
    const {
      savedCards,
      creationMode,
      playMode,
      buttonPlayEnable,
      instructionMode,
    } = this.state;

    return (
      <main>
        <NavBar
          goCreationMode={ this.goCreationMode }
          goPlayMode={ this.goPlayMode }
          buttonPlayEnable={ buttonPlayEnable }
          goInstructionMode={ this.goInstructionMode }
        />

        {creationMode
          && (
            <Creation enablePlayMode={ this.enablePlayMode } />
          )}

        {playMode
          && <Play savedCards={ savedCards } />}

        {instructionMode
          && <Instructions />}
      </main>
    );
  }
}

export default App;
