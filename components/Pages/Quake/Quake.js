import React from 'react';
import Page from "../Page";
import QuakeDetail from '../../QuakeDetail'


export default class Quake extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // from the path `/inbox/messages/:id`
        var id = this.props.match.params.publicID
        console.log('params:', id)
    }

    render() {
        return (

            <Page>
                <div className="container">
                    Quake
                    <QuakeDetail publicID={this.props.match.params.publicID}/>

                    <div><h3>params: {this.props.match.params.publicID}</h3>
                    </div>

                </div>

            </Page>


        );

    }
}