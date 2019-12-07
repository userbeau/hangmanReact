import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Alphabet from './Alphabet';

class App extends Component {

    render() {

      const titleStyle = {
        marginLeft: "2em"
      };
      return (
        <div>
          <h1 style={titleStyle}>HANGMAN</h1>
            <Alphabet />
        </div>
      );
    }
  }

export default App;
