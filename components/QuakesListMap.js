import React from 'react';
import axios from 'axios';
import  QuakesList from './QuakesList'
import QuakeMap from './QuakeMap'

const init_lng = 174.885971;
const init_lat = -40.900557;

export default class QuakesListMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null,
            markers: []
        };

        this.onGetMarkers = this.onGetMarkers.bind(this);
    }


    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        var filterData = [];

        axios.get(`https://api.geonet.org.nz/quake?MMI=0`)
            .then(res => {
                const filterData = [];
                var posts = res.data.features.reduce((array, value) => {
                    // if condition is our filter
                    if (value.properties.mmi >= 2) {
                        // what happens inside the filter is the map
                        let time = value.properties.time;

                        time = new Date(time);
                        time = time.toString().split('GMT')[0];

                        // time = time.split(".")[0].replace(/-/g, '/').replace(/T/g, '  ');
                        value.properties.time = time;
                        value.properties.magnitude = value.properties.magnitude.toFixed(1);
                        value.properties.depth = value.properties.depth.toFixed(1) + ' km';
                        array.push(value);
                    }
                    return array.slice(0, 10);
                }, filterData)

                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    onGetMarkers(data) {
        this.setState({
            markers: data //get google markers from props,then pass it to quakelist via state
        })
    }


    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }

        return (

            <div className="grid quakes-container">

                <QuakesList quakeInfo={this.state.posts} passMarkers={this.state.markers}/>
                <div className="grid-cell map-container u-1of2">
                    <QuakeMap mapInfo={this.state.posts} getMarkers={this.onGetMarkers} init_lat={init_lat}
                              init_lng={init_lng}/>
                </div>

            </div>

        );
    }


    render() {
        return (
            <div >
                <h1>{`${this.props.type}`}</h1>

                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

