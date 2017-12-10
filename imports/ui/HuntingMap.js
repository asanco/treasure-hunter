import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class HuntingMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clueTry: {}
    }
  }

  onMarkerClick (props, marker) {
    let coordinates = {
      lat: marker.position.lat(),
      lng: marker.position.lng()
    }
    this.props.selectClue(coordinates)
  }

  renderChoices () {
    return this.props.hunting.choices.map((choice, i) => {
      return (
        <Marker
          key={i}
          position={choice}
          onClick={this.onMarkerClick.bind(this)}
        />
      )
    })
  }
  render () {
    return (
      <Map
        google={this.props.google} zoom={3}
        style={{width: '50em', height: '25em', position: 'relative'}}
        initialCenter={{
          lat: 4.8047737,
          lng: -75.7487812
        }}
      >
        {this.renderChoices()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGdNkCR-fFFr5A_NfR74M5DZ1ne7QL_UA'
})(HuntingMap)
