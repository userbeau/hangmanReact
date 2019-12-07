import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

var word = "HELLO";
var shownWord = [" "," "," "," "," "];

class Word extends Component {

  constructor(props){
    super(props);

    this.compareLetter = this.compareLetter.bind(this);
  }

  compareLetter = () => {
    if(!word.includes(this.props.letter)){
      console.log(this.props.counter);
      }else{
        for(var i = 0; i < word.length; i++){
          if (word[i] == this.props.letter){
            shownWord[i] = word[i];
          }
        }
    }
  }



    render() {

      const wordStyle = {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "0em"
      };

      this.compareLetter();

      return (
        <div>
        <p style={wordStyle}>_ _ _ _ _</p>
        <Image />
        <h1>letter: {this.props.letter}</h1>
        <h2>{shownWord}</h2>
        </div>
      );
    }
  }

export default Word;
