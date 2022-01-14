import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

const PrimaryLayout = (props) => (
    <div>
        <Seo />
        <Header />
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className={props.column}>
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default PrimaryLayout;