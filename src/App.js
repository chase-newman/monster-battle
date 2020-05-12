import React, {Component} from 'react';
import Character from './Components/Character/Character';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  state = {
    counterSetOne: [1,2,3,4],
    counterSetTwo: [5,6,7,8],
    counterSetThree: [9,10,11,12],
    counterSetFour: [13,14,15,16],
    counterSetFive: [17,18,19,20],
    selectedMonster: null
  }
  
  
  callbackFunction = (childData) => {
    console.log("From Parent: " + childData);
    this.setState({
      selectedMonster: childData
    });
  }
  
  render() {
    
    let monstersOne = this.state.counterSetOne.map((num, index) => {
        return (
          <Character key={num} counter={num} parentCallback={this.callbackFunction}/>
        )
    });
    let monstersTwo = this.state.counterSetTwo.map((num, index) => {
        return (
          <Character key={num} counter={num} parentCallback={this.callbackFunction}/>
        )
    });
    let monstersThree = this.state.counterSetThree.map((num, index) => {
        return (
          <Character key={num} counter={num} parentCallback={this.callbackFunction}/>
        )
    });
    let monstersFour = this.state.counterSetFour.map((num, index) => {
        return (
          <Character key={num} counter={num} parentCallback={this.callbackFunction}/>
        )
    });
    let monstersFive = this.state.counterSetFive.map((num, index) => {
        return (
          <Character key={num} counter={num} parentCallback={this.callbackFunction}/>
        )
    });

    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-8" id="title">
            <h1>Monster Battle Royale</h1>
          </div>
        </div>
        {this.state.selectedMonster === null ? 
        <div>
          <Header />
          <div className="row" > 
            {monstersOne}
          </div>
          <div className="row">
            {monstersTwo}
          </div>
          <div className="row">
            {monstersThree}
          </div>
          <div className="row">
            {monstersFour}
          </div>
          <div className="row">
            {monstersFive}
          </div>
        </div> : 
          <div>
            <div className="row">
              <h1>Great Choice!</h1>
            </div>
            <Character key={this.state.selectedMonster} counter={this.state.selectedMonster} />
            <button 
              className="btn btn-success" 
              style={{margin: "10px 10px"}}>Begin Battle</button>
            <button 
              className="btn btn-warning"
              style={{margin: "10px 0"}}
              onClick={() => {
                this.setState({selectedMonster: null})
              }}>Choose A Different Monster</button>
          </div>
        }
      </div>
  );    
  }

}

export default App;
