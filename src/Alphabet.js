import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './Word';

class Alphabet extends Component {
  constructor(props){
    super(props);
    this.state = {counter: 0,
                  wordState: "",
                  letterClicked: ""
  };

    this.sendLetter = this.sendLetter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  sendLetter = (letter) => {
   // console.log(letter);
   // <Word letter={letter} />
   this.setState({letterClicked: letter});
 }

 updateCounter() {
   var count = this.state.counter;
   count++;
      this.setState({
          counter: count
      });
  }

    render() {
      const alphabetStyle = {
        display: "flex",
        // flexDirection: "horizontal",

        width: "50%",
        margin: "auto",
        textAlign: "center",
        listStyle: "none",
        fontSize: "2em",
        marginTop: "0em"
      };

      const listItemStyle = {
        paddingRight: ".2em"
      };

      return (
        <div>
        <ul style={alphabetStyle}>
          <li id="a" style={listItemStyle} onClick={this.sendLetter.bind(this, "A")}>A</li>
          <li id="b" style={listItemStyle} onClick={this.sendLetter.bind(this, "B")}>B</li>
          <li id="c" style={listItemStyle} onClick={this.sendLetter.bind(this, "C")}>C</li>
          <li id="d" style={listItemStyle} onClick={this.sendLetter.bind(this, "D")}>D</li>
          <li id="e" style={listItemStyle} onClick={this.sendLetter.bind(this, "E")}>E</li>
          <li id="f" style={listItemStyle} onClick={this.sendLetter.bind(this, "F")}>F</li>
          <li id="g" style={listItemStyle} onClick={this.sendLetter.bind(this, "G")}>G</li>
          <li id="h" style={listItemStyle} onClick={this.sendLetter.bind(this, "H")}>H</li>
          <li id="i" style={listItemStyle} onClick={this.sendLetter.bind(this, "I")}>I</li>
          <li id="j" style={listItemStyle} onClick={this.sendLetter.bind(this, "J")}>J</li>
          <li id="k" style={listItemStyle} onClick={this.sendLetter.bind(this, "K")}>K</li>
          <li id="l" style={listItemStyle} onClick={this.sendLetter.bind(this, "L")}>L</li>
          <li id="m" style={listItemStyle} onClick={this.sendLetter.bind(this, "M")}>M</li>
          <li id="n" style={listItemStyle} onClick={this.sendLetter.bind(this, "N")}>N</li>
          <li id="o" style={listItemStyle} onClick={this.sendLetter.bind(this, "O")}>O</li>
          <li id="p" style={listItemStyle} onClick={this.sendLetter.bind(this, "P")}>P</li>
          <li id="q" style={listItemStyle} onClick={this.sendLetter.bind(this, "Q")}>Q</li>
          <li id="r" style={listItemStyle} onClick={this.sendLetter.bind(this, "R")}>R</li>
          <li id="s" style={listItemStyle} onClick={this.sendLetter.bind(this, "S")}>S</li>
          <li id="t" style={listItemStyle} onClick={this.sendLetter.bind(this, "T")}>T</li>
          <li id="u" style={listItemStyle} onClick={this.sendLetter.bind(this, "U")}>U</li>
          <li id="v" style={listItemStyle} onClick={this.sendLetter.bind(this, "V")}>V</li>
          <li id="w" style={listItemStyle} onClick={this.sendLetter.bind(this, "W")}>W</li>
          <li id="x" style={listItemStyle} onClick={this.sendLetter.bind(this, "X")}>X</li>
          <li id="y" style={listItemStyle} onClick={this.sendLetter.bind(this, "Y")}>Y</li>
          <li id="z" style={listItemStyle} onClick={this.sendLetter.bind(this, "Z")}>Z</li>


        </ul>
        <Word letter={this.state.letterClicked} counter={this.updateCounter}/>
        </div>
      );
    }
  }

export default Alphabet;
