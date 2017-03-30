import React from 'react';
import Page from "../Page";
import QuakeDetail from '../../QuakeDetail'

import QuakeHistory from '../../QuakeHistory'

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
        const publicID = this.props.match.params.publicID;
        return (

            <Page>
                <div className="container">
                    Quake
                    <QuakeDetail publicID={publicID}/>

                    <QuakeHistory publicID={publicID}/>

                </div>

            </Page>


        );

    }
}