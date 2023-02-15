import React from "react";
import "./Home.css";
import TypeWriter from 'typewriter-effect';
import SideInfo from "../AccountsLinks/AccountsLinks";
function Home() {
    const scrollToAbout = () => {
        
        document.getElementsByClassName('about')[0].scrollIntoView({behavior: 'smooth'});
    }


    return (
        <div className="home">
            <p className="hi-text">Hi, My name is </p>
            
            <h1 className="name-text">
                <TypeWriter 
                options={
                    {
                        strings: ['Mostafa Adel'],
                        autoStart: true,
                        loop: true,
                }}
                />
                </h1>
                
            <h2 className="job-text">Software Engineer</h2>
            <SideInfo/>
            <button className="bg-transparent more-btn" onClick={scrollToAbout}>Check out more</button>
            
        </div>
    );
}

export default Home;