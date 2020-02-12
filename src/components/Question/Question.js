import React from 'react';
import './Question.css';
import bird from './bird.jpg';
import birdsData from '../../data';

const Question = ({ correctAns }) => {
    return (
        <div className={'Question'}>
            <img src={(correctAns!==undefined) ? (correctAns.isClicked? correctAns.logo : bird):bird} alt={'bird'} className={'Question-img'} />
            <ul className={'question-content'}>
                <li className={'question-item'}>{(correctAns!==undefined) ?(correctAns.isClicked ? correctAns.name : '******'):bird}</li>
                <li className={'question-item'}>
                    <audio controls>
                        <source src={(correctAns!==undefined)? correctAns.audio: ''} type="audio/mp3; codecs=vorbis" />
                        <source src={(correctAns!==undefined)? correctAns.audio: ''} type="audio/mpeg" />
                    </audio>
                </li>
            </ul>
        </div>
    );
}
export default Question;