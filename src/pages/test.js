import React, { useEffect } from "react";
import {navigate} from 'gatsby';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { gsap } from "gsap";

export default function Test() {
    const listOne = React.createRef();

    useEffect(  
        () => {
        gsap.to( listOne.current, { rotation: "+=360" })
    }, [listOne]);
    
    return (
    <div>
          <Header />
            
            <ul>
                <li ref={listOne}>This is an item</li>
                <li>This is another item</li>
            </ul>
            <button className="btn" onClick={()=>navigate("/")}>Navigate to Home</button>
          <Footer />
      </div>
   );
}