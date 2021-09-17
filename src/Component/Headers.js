import React from "react";
import './Headers.css';
const Headers = () => {
    return (
        // <div className="ui fixed menu">
        //     <div className="ui container center">
        //         <h2>Contact Page...</h2>
        //     </div>

        // </div>

        <div class="header">
            <a href="#default" class="logo">Contact-page</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}
export default Headers;