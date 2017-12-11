import React, { Component } from 'react'
import {Map, Marker, Polygon, GoogleApiWrapper} from 'google-maps-react'

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

  renderHints () {
    return this.props.hunting.clues.map((clue, i) => {
      if (clue.hint) {
        return (
          <Polygon
            key={i}
            paths={clue.hints}
            strokeColor={i === 0 ? '#FF0000' : i === 1 ? '#FFFF00' : '#00FF00'}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={i === 0 ? '#FF0000' : i === 1 ? '#FFFF00' : '#00FF00'}
            fillOpacity={0.35}
          />
        )
      }
    })
  }

  renderClues () {
    return this.props.hunting.clues.map((clue, i) => {
      if (clue.done) {
        return (
          <Marker
            key={i}
            position={{lat: clue.lat, lng: clue.lng}}
            name={'Clue ' + i}
            icon={i === 0 ? { url: '../../jolly-roger-red.png', anchor: new google.maps.Point(16, 16), scaledSize: new google.maps.Size(32, 32)} : i === 1 ? {url: '../../jolly-roger-yellow.png', anchor: new google.maps.Point(16, 16), scaledSize: new google.maps.Size(32, 32)}
            : {url: '../../jolly-roger-green.png', anchor: new google.maps.Point(16, 16), scaledSize: new google.maps.Size(32, 32)}}
          />
        )
      }
    })
  }

  render () {
    return (
      <Map
        google={this.props.google} zoom={2}
        mapTypeId={this.props.google.maps.MapTypeId.HYBRID}
        style={{width: '50em', height: '30em', position: 'relative'}}
        initialCenter={{
          lat: 4.8047737,
          lng: -75.7487812
        }}
      >
        {this.props.clue &&
          <Marker
            position={{lat: this.props.clue.lat, lng: this.props.clue.lng}}
            name={'Selected'}
          />
        }
        {this.renderClues()}
        {this.renderHints()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGdNkCR-fFFr5A_NfR74M5DZ1ne7QL_UA'
})(HuntingMap)
