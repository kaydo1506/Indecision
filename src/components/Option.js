import React, { useState, useEffect } from 'react';

const Option = (props) => {
    const img1 = <img alt='' src='/radio-active.png' className='radio__img' />;
    const img2 = <img alt='' src='/radio-inactive.png' className='radio__img' />;
    const [state, setState] = useState(false);

    const handleStateChange = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
        // state === true ? setState(false) : setState(true);
    };

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem(props.optionText)));
    }, [props]);
    useEffect(() => {
        window.localStorage.setItem(props.optionText, state);
    }, [state, props.optionText]);

    return (
        <div>
            <ul className='option__container'>
                <li className='option'>
                    <div className='radio'>
                        <button className='radio__button' onClick={handleStateChange}>
                            {state ? img1 : img2}
                        </button>

                        <p className='option__text radio__text'>
                            <span className={state ? 'checked' : null}>{props.optionText}</span>
                        </p>
                    </div>
                    <button
                        className='button button--link'
                        onClick={(e) => {
                            props.handleDeleteOption(props.optionText);
                        }}
                    >
                        remove
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Option;
