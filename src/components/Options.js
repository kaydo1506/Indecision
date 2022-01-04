import React, { useRef } from 'react';
import Option, { Append } from './Option';

const Options = (props) => {
    const parent = useRef();
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your Options</h3>
                <button className='button button--link' onClick={props.handleDeleteOptions}>
                    Remove All
                </button>
            </div>

            {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}

            {props.options.map((option, index) => (
                <Option
                    parent={parent}
                    init={true}
                    key={option}
                    optionText={option}
                    count={index}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            <Append parent={parent} />
        </div>
    );
};

export default Options;
