import React from "react";
import {navigate} from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Test = () => (
    <div>
        <Header />
        <ul>
        <li>This is an item</li>
        <li>This is another item</li>
        <button className="btn" onClick={()=>navigate("/")}>Navigate to Home</button>
        </ul>
        <Footer />
    </div>
);

export default Test;