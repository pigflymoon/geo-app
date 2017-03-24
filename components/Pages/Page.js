import React, {PropTypes} from "react";

import "../../stylesheets/pages/_page.scss"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default class Page extends React.Component {


    render() {

        return (
            <div className="Page">
                <div className="Page-header">
                    <NavBar />
                </div>

                <div className="Page-body">
                    { this.props.children }
                </div>


                <div className="Page-footer">
                    <Footer />
                </div>
            </div>
        );
    }

}
