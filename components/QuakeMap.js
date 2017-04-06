import React from 'react'
import {PropTypes} from 'react'
import axios from 'axios';

export default class QuakeMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markersData: []
        }
    }

    markers = [];

    componentWillReceiveProps(nextProps) {

        if (this.props.type && this.props.type == "SliderMap") {

            this.loadMapInfo(nextProps)
        }

    }


    componentDidMount() {
        this.map = this.createMap()
        console.log(this.props.type)

        if (this.props.type == "SliderMap") {
            this.loadMapInfo("");
        } else {
            this.loadFeatures("")
        }

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

    loadMapInfo(nextProps) {
        let self = this
        let url = self.props.nps_source


        if (nextProps) {
            url = url + nextProps.level;
            self.map = self.createMap()
        } else {
            url = url + self.props.level;
        }
        let infoWindow = new google.maps.InfoWindow()

        axios.get(url)
            .then(function (result) {
                for (let post of result.data.features) {
                    let marker = self.createMarker(post.geometry.coordinates[1], post.geometry.coordinates[0], self.map);
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

                    self.markers.push(marker)//add markers as a property in self

                } // for
            }); //then
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
        if (this.props.getMarkers) {
            this.props.getMarkers(this.markers)//set google markers in props
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
            <div className="quake-map" ref="mapdiv"></div>

        )
    }
}

QuakeMap.propTypes = {
    init_lat: React.PropTypes.number,
    init_lng: React.PropTypes.number
};