import React, { Component } from 'react'

class HuntList extends Component {
  constructor(props) {
   super(props);
   this.state = {
     name: ''
 };

   this.handleSubmit = this.startHunt.bind(this);
   this.startHunt = this.props.startHunt;
   this.props.history.push('hunting');
 }


 handleSubmit(e) {
   this.startHunt();
 }

  render () {
    return (
      <div>
        <h3>{this.props.hunt.name}</h3>
        <h4>By: {this.props.hunt.creator.username}</h4>
        <button onClick={this.props.startHunt()} className='btn btn-default'>Play</button>
      </div>
    )
  }
}

export default HuntList
