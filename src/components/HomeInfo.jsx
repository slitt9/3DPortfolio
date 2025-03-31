import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Sahil Litt</span> 👋
            <br />
            Currently focusing on studies centered around Computer Science at UBC, I'm striving to make a mark in the tech world.
        </h1>
    ),
    2: (
        <InfoBox
            text="I’m passionate about building efficient and impactful software solutions."
            link="/about"
            btnText="Learn about me"
        />
    ),
    3: (
        <InfoBox
            text="Check out some of the projects I've built."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Looking to get in touch? I'm only a few keystrokes away."
            link="/contact"
            btnText="Get in touch"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
