import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer container">
            <div className="row">
                <div className="col-12">
                    <p className="footer-text">
                        Made by 
                        <a href="https://github.com/mostafa4adel"> Mostafa Adel </a> 
                        Using 
                        <a href="https://reactjs.org/"> <img src={"/logo192.png"} alt="React Logo" className="react-logo"></img> </a>
                        
                    </p>

                    </div>
                    </div>

        </div>
    );
}

export default Footer;