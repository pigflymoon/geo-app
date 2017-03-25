import React from 'react';
import Page from "../Page";
import Banner from '../../Banner'
import NewsSlider from '../../NewsSlider'
import QuakeList from '../../QuakeList'
import QuakeMap from '../../QuakeMap'

export default class Home extends React.Component {
    render() {
        return (

            <Page>
                <Banner />
                <NewsSlider type="News" />
                <div className="container grid">
                    <QuakeList type="Quakes" />
                    <QuakeMap />
                </div>

            </Page>


        );

    }
}