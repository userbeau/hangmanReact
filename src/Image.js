import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import Word from './Word';
import hangman1 from './img/hangman1.png';
import hangman2 from './img/hangman2.png';
import hangman3 from './img/hangman3.png';
import hangman4 from './img/hangman4.png';
import hangman5 from './img/hangman5.png';
import hangman6 from './img/hangman6.png';
import hangman7 from './img/hangman7.png';
import hangman8 from './img/hangman8.png';

class Image extends Component {

    render() {
      const imgStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '450px'
      };

      return (
        <div>
        <img style={imgStyle} src={hangman1} alt="hangman1" />
        </div>
      );
    }
  }

export default Image;
