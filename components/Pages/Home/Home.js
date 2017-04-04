import React from 'react';
import Page from "../Page";
import Banner from '../../Banner'
import NewsSlider from '../../NewsSlider'
import QuakesListMap from '../../QuakesListMap'


export default class Home extends React.Component {
    render() {
        return (

            <Page>
                <Banner />
                <NewsSlider type="news" />
                <div className="container">
                    <QuakesListMap type="Quakes" />
                </div>

            </Page>


        );

    }
}