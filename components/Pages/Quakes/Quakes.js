import React from 'react';
import Page from "../Page";
import Labels from '../../RangeSlider/label'
import QuakeMap from '../../QuakeMap'

const init_lng = 174.885971;
const init_lat = -40.900557;
let nps_url = "https://api.geonet.org.nz/quake?MMI=";

export default class Quakes extends React.Component {


    constructor() {
        super()
        this.state = {
            level: 4
        }
        this.handleChooseLevel = this.handleChooseLevel.bind(this)

    }

    handleChooseLevel(stat) {
        console.log('hi level', stat)
        if (stat <= 3) {
            this.setState({level: 3})
        } else if (stat <= 4) {
            this.setState({level: 4})
        } else if (stat <= 5) {
            this.setState({level: 5})
        } else if (stat <= 6) {
            this.setState({level: 6})
        } else {
            this.setState({level: 7})
        }

    }

    render() {
        return (
            <Page>
                <div className="container grid-row">

                        <Labels onChooseLevel={this.handleChooseLevel}></Labels>

                    <div className="slide-map-container">
                        <QuakeMap type="SliderMap" init_lat={init_lat} init_lng={init_lng}
                                  nps_source={nps_url} level={this.state.level}/>

                    </div>
                </div>


            </Page>


        );

    }
}