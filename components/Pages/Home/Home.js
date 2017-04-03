import React from 'react';
import Page from "../Page";
import Banner from '../../Banner'
import NewsSlider from '../../NewsSlider'
import QuakesList from '../../QuakesList'


export default class Home extends React.Component {
    render() {
        return (

            <Page>
                <Banner />
                <NewsSlider type="news" />
                <div className="container">
                    <QuakesList type="Quakes" />
                </div>

            </Page>


        );

    }
}