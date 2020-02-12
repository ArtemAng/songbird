import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AnswersListItem.css';

const AnswersListItem = ({ name, isCorrect, click, isClicked }) => {
    const style = {
        bgc: isClicked? (isCorrect? 'correct' : 'error'): ''
    };
    return (
        <li onClick={click} className={'answers-list-item list-group-item '}><div className={'indicator '+ style.bgc}></div> {name} </li>
    );
}

export default AnswersListItem;