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
                <QuakeMap mapInfo={this.state.post} init_lat={init_lat} init_lng={init_lng}/>
                <div className="grid-cell u-1of2 quake-list">
                    {this.state.posts.map((post, index) =>
                        <div className="grid grid-column quake-info" key={index}>
                            <div className="grid">
                                <div className="grid-cell u-1of2">NZST</div>
                                <div className="grid-cell u-1of2">{post.properties.time}</div>
                            </div>
                            <div className="grid">
                                <div className="grid-cell u-1of2">Magnitude</div>
                                <div className="grid-cell u-1of2"> {post.properties.magnitude}</div>
                            </div>
                            <div className="grid">
                                <div className="grid-cell u-1of2">Depth</div>
                                <div className="grid-cell u-1of2"> {post.properties.depth}</div>
                            </div>
                            <div className="grid">
                                <div className="grid-cell u-1of2">Locality</div>
                                <div className="grid-cell u-1of2"> {post.properties.locality}</div>
                            </div>
                            <div className="grid">
                                <div className="grid-cell u-1of2">Latitude—Longtitude</div>
                                <div className="grid-cell u-1of2">
                                    <span className="grid-cell u-1of2">
                                        Latitude: {parseFloat(post.geometry.coordinates[1]).toFixed(2)}—</span>
                                    <span className="grid-cell u-1of2">
                                        Longitude: {parseFloat(post.geometry.coordinates[0]).toFixed(2)}</span>


                                </div>
                            </div>
                        </div>
                    )}
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

