import React, { Component, Fragment } from 'react';

import TopPanel from './TopPanel/TopPanel';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import AnswersList from './AnswersList/AnswersList';

import '../styles/App.css';
import Info from './Info/Info';
import NextLevel from './NextLevel/NextLevel';
import BirdData from '../data';
import birdsData from '../data';
import Final from './final/Final';

class App extends Component {
    state = {
        idx: 0,
        answers: BirdData[0],
        clicked: {
            name: null,
            description: 'Послушайте плеер. Выберите птицу из списка',
            audio: null
        },
        score: 0
    };

    clicked = (id) => {
        // this.setState((prevState)=> prevState.clicked=prevState.answers[id]);
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.clicked = { ...prevState.answers[id] };
            newState.answers[id].isClicked = true;
            return newState;
        });
    }

    componentWillMount() {
        this.setState(() => {
            const newState = { ...this.state };
            newState.answers[Math.floor(Math.random() * Math.floor(6))].isCorrect = true;
            return newState;
        });
    }

    goNext = () => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.idx += 1;
            newState.answers = birdsData[newState.idx];
            newState.answers[Math.floor(Math.random() * Math.floor(6))].isCorrect = true;
            return newState;
        });
    }
    render() {

        const correctAns = this.state.idx < 6 ? this.state.answers.find((i) => i.isCorrect === true) : undefined;
        console.log(this.state)
        return (
            <div className="App">
                <header className="App-header">
                    <TopPanel correctAns={correctAns} score={this.state.score} />
                    <Questions idx={this.state.idx}/>
                </header>
                <main>
                    <Question correctAns={correctAns} />
                    <div className={'block'}>
                        {
                            this.state.idx < this.state.answers.length ? <Fragment><AnswersList clicked={this.clicked} answers={this.state.answers} />
                                <Info clicked={this.state.clicked} /></Fragment> : <Final />
                        }
                    </div>
                </main>
                <footer>
                    <NextLevel correctAns={correctAns} goNext={this.goNext} />
                </footer>
            </div>
        );
    }
}

export default App;
