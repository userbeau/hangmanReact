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
import hangman9 from './img/hangman9.png';


class Image extends Component {

    render() {
      const imgStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '450px'
      };

      var image;
      if(this.props.counter == 0){
        image = hangman1;
      }
      else if(this.props.counter == 1){
        image = hangman2;
      }else if (this.props.counter == 2){
        image = hangman3;
      }else if (this.props.counter == 3){
        image = hangman4;
      }else if (this.props.counter == 4){
        image = hangman5;
      }else if (this.props.counter == 5){
        image = hangman6;
      }else if (this.props.counter == 6){
        image = hangman7;
      }else if (this.props.counter == 7){
        image = hangman9;
      }

      return (
        <div>
        <img style={imgStyle} src={image} alt="hangman1" />
        </div>
      );
    }
  }

export default Image;
