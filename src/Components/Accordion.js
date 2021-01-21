import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeState, setActiveState] = useState(null);

    

    const onTitleClick = (index) => {
        setActiveState(index);
        console.log(activeState);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeState ? 'active' : '';

        return (
            <React.Fragment key={item.value}>
                <div className={`title ${active}`} onClick={() => {onTitleClick(index)}}>
                    <i className="icon dropdown"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion;