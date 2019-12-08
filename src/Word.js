import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var one="_";
var two="_";
var three="_";
var four="_";
var five="_";
var six="_";
var seven="_";

class Word extends Component {

  constructor(props){
    super(props);

    this.compareLetter = this.compareLetter.bind(this);
  }

  compareLetter = () => {
      var word = this.props.theWord;
      if(this.props.letter == "NEW"){
        one="_";
        two="_";
        three="_";
        four="_";
        five="_";
        six="_";
        seven="_";
      }
      for(var i = 0; i < word.length; i++){
          if (word[i] == this.props.letter){
            if (i==0){
                one = this.props.letter;
            }
            if (i==1){
                two = this.props.letter;
            }
            if (i==2){
                three = this.props.letter;
            }
            if (i==3){
                four = this.props.letter;
            }
            if (i==4){
                five = this.props.letter;
            }
            if (i==5){
                six = this.props.letter;
            }
            if (i==6){
                seven = this.props.letter;
            }
          }
        }
  }



    render() {

      const wordStyle = {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "0em",
          padding: "1%",
          display: "inline",
      };

        const divStyle = {
            width:"50%",
            margin: "auto",
            textAlign: "center"
        }

this.compareLetter();

      return (
        <div style={divStyle}>
          <p style={wordStyle}>{one}</p>
          <p style={wordStyle}>{two}</p>
          <p style={wordStyle}>{three}</p>
          <p style={wordStyle}>{four}</p>
          <p style={wordStyle}>{five}</p>
          <p style={wordStyle}>{six}</p>
          <p style={wordStyle}>{seven}</p>
        </div>
      );
    }
  }

export default Word;
