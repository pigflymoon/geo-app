import React from 'react';
import axios from 'axios'
import Slider from 'react-slick'

export default class QuakeHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            loading: true,
            error: null
        };

    }

    componentDidMount() {
        axios.get('https://api.geonet.org.nz/quake/history/' + this.props.publicID)
            .then(res => {
                const filterData = [];
                console.log('data ', res.data.features)
                var posts = res.data.features.reduce((array, value) => {

                    let time = value.properties.time;

                    time = new Date(time);
                    time = time.toString().split('GMT')[0];
                    value.properties.time = time;
                    value.properties.magnitude = value.properties.magnitude.toFixed(1);
                    value.properties.depth = value.properties.depth.toFixed(1) + ' km';
                    array.push(value);

                    return array
                }, filterData)

                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
                console.log('posts are ', posts)
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
        const settings = {
            className: 'center',
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 1,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
            }
        };
        return (
            <div className="history-container">

                <div className="history-box">
                    <div className="row header">
                        <div className="cell">NZST</div>
                        <div className="cell">Magnitude</div>
                        <div className="cell">Depth</div>
                        <div className="cell">Latitude</div>
                        <div className="cell">Longtitude</div>
                    </div>
                </div>

                {this.state.posts.map((post, index) =>
                    <div className="history-box" key={index}>
                        <div className="row">
                            <div className="cell"><p>{post.properties.time}</p></div>
                            <div className="cell"><p>{post.properties.magnitude}</p></div>
                            <div className="cell"><p>{post.properties.depth}</p></div>
                            <div className="cell"><p>{parseFloat(post.geometry.coordinates[1]).toFixed(2)}</p></div>
                            <div className="cell"><p>{parseFloat(post.geometry.coordinates[0]).toFixed(2)}</p></div>
                        </div>
                    </div>
                )}
            </div >

        );
    }

    render() {
        return (
            <div>
                <h2>History</h2>
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        )
    }
}
