import { render } from '@testing-library/react';
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(()=>{
        const bodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false); 
        };

        document.body.addEventListener('click', bodyClick);

        return () => {
            document.body.removeEventListener('click', bodyClick);
        }
    },[])

    const renderedOptions = options.map((option) => {

        if(selected === option) return null;//Don't render the selected

        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    })


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open?'visible active': ''}`} onClick={() => setOpen(!open)}>
                    <i className="icon dropdown"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition': ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );;
}

export default Dropdown;