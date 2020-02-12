import React, { Fragment } from 'react';
import './Info.css';

const Info = ({ clicked }) => {
    return (
        <div className={'info'}>

            {
                clicked.name ? <Fragment>
                    <div className={'info1'}>
                        <img src={clicked.logo} className={'bird-icon'} />
                        <ul className={'base-info'}>
                            <li className={'name inf-item'}>{clicked.name}</li>
                            <li className={'audio inf-item'}>
                                <audio controls>
                                    <source src={clicked.audio} type="audio/mp3;" />
                                    <source src={clicked.audio} type="audio/mpeg" />
                                </audio>
                            </li>
                        </ul>
                    </div>
                    <div className={'description'}>
                        {clicked.description}
                    </div>
                </Fragment> : clicked.description
            }


        </div>
    );
}
export default Info;