import React, { Component } from 'react';
import logo from './logo.svg';
import './TopPanel.css';

const TopPanel = ({correctAns, score}) => {
    console.log(correctAns);
    return (
        <div className={'TopPanel'}>
            <img src={logo} className={'logo'} />
            <div className={'score'}>Score: 0</div>
            {/* {correctAns.isClicked ? score+5 : score } */}
        </div>
    );
}
export default TopPanel;