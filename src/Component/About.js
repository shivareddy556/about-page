import React from 'react';
import './About.css';
const About = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <div className="headers">{name}</div>
                <div>{email} </div>
            </div>
            <div>
                <i className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "5px", marginLeft: "70rem", fontSize: "25px" }}
                    onClick={() => props.clickHandler(id)}></i>
            </div>
        </div>

    )
}
export default About;