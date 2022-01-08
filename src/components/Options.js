import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your List</h3>
                <button className='button button--link' onClick={props.handleDeleteOptions}>
                    Remove All
                </button>
            </div>

            {props.options.length === 0 && <p className='widget__message'>Start adding to your list!</p>}

            {props.options.map((option, index) => (
                <Option
                    init={true}
                    key={option}
                    optionText={option}
                    count={index}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
};

export default Options;
