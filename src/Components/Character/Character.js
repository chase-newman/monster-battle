import React, {Component} from 'react';
import './Character.css';

class Character extends Component {
    sendData = () => {
      console.log(this.props.counter);
      this.props.parentCallback(this.props.counter)
    }
    render(props) {
        return (
            <div className="col-sm-3" id="card" onClick={this.sendData}>
                <h3>{this.props.counter}</h3>
                <img src={`https://robohash.org/${this.props.counter}?set=set2`} alt="monster" />
            </div>
        );          
    }
      
}

export default Character