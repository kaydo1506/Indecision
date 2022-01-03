import React, { useState, useEffect } from 'react';

const Option = (props) => {
    const img1 = <img alt='' src='/radio-active.png' className='radio__img' />;
    const img2 = <img alt='' src='/radio-inactive.png' className='radio__img' />;
    const [state, setState] = useState(false);

    const handleStateChange = () => {
        state === true ? setState(false) : setState(true);
    };

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem(props.optionText)));
    }, [props]);
    useEffect(() => {
        window.localStorage.setItem(props.optionText, state);
        console.log(state);
    }, [state, props.optionText]);

    return (
        <div className='option'>
            <div className='radio'>
                <button className='radio__button' onClick={handleStateChange}>
                    {state ? img1 : img2}
                </button>

                <p className='option__text radio__text'>{props.optionText}</p>
            </div>
            <button
                className='button button--link'
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;
