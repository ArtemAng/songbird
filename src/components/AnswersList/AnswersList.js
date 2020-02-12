import React from 'react';

import AnswersListItem from '../AnswersListItem/AnswersListItem';
import './AnswersList.css'

const AnswersList = ({ answers, clicked }) => {
    return (
        <ul className={'answers-list  list-group'}>{/* list-group*/}
            {
                answers.map((item, id) => {
                    return <AnswersListItem key={id} name={item.name} isClicked={item.isClicked} isCorrect={item.isCorrect} click={()=>clicked(id)} />
                })
            }
        </ul>
    );
}
export default AnswersList;