import React from 'react'
import {PropTypes} from 'react'


export default class QuakeMap extends React.Component {

    markers = [];

    componentDidMount() {
        this.map = this.createMap()
        this.loadFeatures("")
    }

    createMap() {
        let mapOptions = {
            zoom: 6,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapdiv, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.init_lat,
            this.props.init_lng
        )
    }

    loadFeatures() {
        // let self = this;
        this.map = this.createMap();
        let posts = this.props.coordinates;
        for (let post of posts) {
            //add markers as a property in self
            let marker = this.createMarker(post.geometry.coordinates[1], post.geometry.coordinates[0], this.map);
            this.markers.push(marker);
        }


    }

    createMarker(lat, lng, map) {
        let pointval = new google.maps.LatLng(
            parseFloat(lat),
            parseFloat(lng));

        let marker = new google.maps.Marker({
            position: pointval,
            map: map
        });

        return marker
    }

    render() {
        return (
            <div className="grid-cell u-1of2">
                <div className="quake-map" ref="mapdiv"></div>
            </div>
        )
    }
}

QuakeMap.propTypes = {
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
};