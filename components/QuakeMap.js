import React from 'react'
import {PropTypes} from 'react'


export default class QuakeMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markersData: []
        }
        this.onHandleMarkers = this.onHandleMarkers.bind(this);
    }

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
        let posts = this.props.mapInfo;

        let infoWindow = new google.maps.InfoWindow();
        for (let post of posts) {
            //add markers as a property in self
            let marker = this.createMarker(post.geometry.coordinates[1], post.geometry.coordinates[0], this.map);
            let time = post.properties.time;
            let depth = post.properties.depth;
            let magnitude = post.properties.magnitude;
            let locality = post.properties.locality;

            marker.addListener('click', function () {
                infoWindow.close();
                let infoContent = '<h3><i class="fa fa-clock-o" aria-hidden="true"></i> Time: ' + time + " </h3><p>magnitude: " + magnitude + " </p><p>Depth: " + depth + " </p><p>Locality: " + locality + "</p>";
                infoWindow.setContent(infoContent);
                infoWindow.open(this.map, this);
            });

            this.markers.push(marker);
        }

        this.setState({
            markersData: this.markers
        });
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

    onHandleMarkers() {
        console.log('markers Data', this.state.markersData)
        this.props.getMarkers(this.state.markersData)
    }

    render() {
        return (
            <div className="grid-cell u-1of2 map-container">

                <div className="quake-map" ref="mapdiv"></div>
            </div>
        )
    }
}

QuakeMap.propTypes = {
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
};