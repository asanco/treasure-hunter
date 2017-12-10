import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class HuntingMap extends Component {
  renderChoices () {
    return this.props.hunting.choices.map((choice, i) => {
      return (
        <Marker
          key={i}
          position={choice}
        />
      )
    })
  }
  render () {
    return (
      <Map google={this.props.google} zoom={14}>
        {this.renderChoices()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGdNkCR-fFFr5A_NfR74M5DZ1ne7QL_UA'
})(HuntingMap)
