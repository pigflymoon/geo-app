import React from 'react'
import axios from 'axios'
import Slider from 'react-slick'


export default class NewsSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        axios.get(`https://api.geonet.org.nz/${this.props.type}/geonet`)
            .then(res => {
                // Transform the raw data by extracting the nested posts
                const posts = res.data.feed.map(function (item) {

                    if (item.published) {
                        item.published = item.published.slice(0, 10).replace(/-/g, "-")
                    }

                    return item;
                });

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

    renderPosts() {
        if (this.state.error) {
            return this.renderError();
        }
        const settings = {
            className: 'center',
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
            }
        };
        return (
            <Slider {...settings} >
                {this.state.posts.map((post, index) =>
                    <div key={index}><span>{post.published}</span><h3><a href={post.link}>{post.title}</a></h3>
                    </div>
                )}
            </Slider>
        );
    }

    render() {
        return (
            <div className="news-slider">
                <h1>{`${this.props.type}`}</h1>
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        )
    }
}