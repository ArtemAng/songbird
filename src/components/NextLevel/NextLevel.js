import React from 'react';
import './NextLevel.css'

const NextLevel = ({correctAns, goNext}) => {
    const bgc = (correctAns!==undefined)?(correctAns.isClicked? ' active' : ''): '';
    return (
        <button className={"next-lvl"+bgc} onClick={goNext}>Next level</button>
    );
}
export default NextLevel;