import React from 'react';
import axios from 'axios';
import QuakeMap from './QuakeMap'

const init_lng = 174.885971;
const init_lat = -40.900557;

export default class QuakeDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {


        axios.get('https://api.geonet.org.nz/quake/' + this.props.publicID)
            .then(res => {
                const filterData = [];
                var posts = res.data.features.reduce((array, value) => {

                    let time = value.properties.time;

                    time = new Date(time);
                    time = time.toString().split('GMT')[0];
                    value.properties.time = time;
                    value.properties.magnitude = value.properties.magnitude.toFixed(1);
                    value.properties.depth = value.properties.depth.toFixed(1) + ' km';
                    array.push(value);

                    return array.slice(0, 10);
                }, filterData)

                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })


            .catch(err => {
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

    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }

        return (

            <div className="grid">
                <div className="grid-cell u-1of2 quake-list">
                    {this.state.posts.map((post, index) =>
                        <div className="grid quake-info" key={index}>
                            <div className="grid-cell">
                                <span>NZST: {post.properties.time}</span>
                                <span className="orange-text">Magnitude: {post.properties.magnitude}</span>
                                <span>Depth: {post.properties.depth}</span>
                                <p><i className="fa fa-map-marker red-text text-lighten-3"
                                      aria-hidden="true"></i>Locality: {post.properties.locality}
                                </p>
                            </div>
                            <div className="grid-cell u-1of8 item-end"><i className="fa fa-arrow-right"></i></div>

                        </div>
                    )}
                </div>


                <QuakeMap mapInfo={this.state.post} init_lat={init_lat} init_lng={init_lng}/>
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

