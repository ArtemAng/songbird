import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Questions.css';

const Questions = ({idx}) => {
    const quests = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    return (
        <ul className={'Questions pagination'}>
            {quests.map((item, i)=><li className={'TopItem page-item' +(idx==i?' active':'')}><a className="page-link" href="#">{item}</a></li>)}
        </ul>
    );
}
export default Questions;