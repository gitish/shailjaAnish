import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
let result="";
class Game extends Component {
  getRandomMap() {
    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let color= [];
    let ninth = letters[Math.floor(Math.random() * 36)];
    result=ninth;
    for (let i = 1; i < 100; i++) {
      let symb = letters[Math.floor(Math.random() * 36)];
      if(i%9==0){
        symb=ninth;
      }
      color.push({
        "index":i,
        "symb" : symb
      });
    }
    
    return color;
  }
  showResult(){
    alert(result);
  }

  render() {
    if (!this.props.data) return null;
    
    const board = this.getRandomMap().map(function (item) {
      return (
        <div key={id++} className="columns game-item" style={{width: "60px"}}>
          <div style={{ textAlign: "Left" }}>{item.index}</div>
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>{item.symb}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="game">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h2>Read the symbol of that number</h2>

              <div
                id="game-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {board}
              </div>
            </div>
            <button onClick={this.showResult}>Click here to check your answer</button>
          </div>
         
        </Fade>
       
      </section>
    );
  }
}

export default Game;
