import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'what is react?',
        content: 'why does it even bother you what it is '
    },{
        title:'Heard of Vue?',
        content: 'What is wrong with you, you here to bluff of react'
    },{
        title:'Have you been paid?',
        content:'What does it have with our conversation...'
    }
]

const App = () => {

    return (<div>
                {/* <Accordion items={items}/> */}
                <Search />
            </div>);
}

export default App;