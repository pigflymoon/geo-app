import React from 'react';

export default class QuakesList extends React.Component {
    constructor(props) {
        super(props);
        var quakeData = this.props
        console.log('props', this.props.quakeInfo)

        this.state = {
            loading: false,
            error: null,
            posts: this.props.quakeInfo

        };

        // var arrData = [];
        //
        // for(var v in quakeData){
        //     arrData.push(quakeData[v]);
        // }
        // this.state = {
        //     posts: arrData,
        //     markers: []
        // };
        //
        // console.log('arrData', arrData)
        // console.log('props', this.props.quakeInfo)
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

            <div className="quakes-list">
                {this.state.posts.map((post, index) =>
                    <div className="grid quake-info" key={index}>
                        <div className="grid-cell">
                            <span>NZST: {post.properties.time}</span>
                            <span className="orange-text">Magnitude: {post.properties.magnitude}</span>
                            <span>Depth: {post.properties.depth}</span>
                            <p><i className="fa fa-map-marker red-text text-lighten-3"
                                  aria-hidden="true"></i><a
                                href={`/quake/${post.properties.publicID}`}>Locality: {post.properties.locality}</a>
                            </p>
                        </div>
                        <div className="grid-cell u-1of8 item-end"><i className="fa fa-arrow-right"></i></div>

                    </div>
                )}
            </div>

        );
    }

    render() {
        return (
            <div className="grid-cell u-1of2">


                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

