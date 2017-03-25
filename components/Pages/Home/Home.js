import React from 'react';
import Page from "../Page";
import Banner from '../../Banner'
import NewsSlider from '../../NewsSlider'

export default class Home extends React.Component {
    render() {
        return (

            <Page>
                <Banner />
                <NewsSlider type="news" />
            </Page>


        );

    }
}