import React, {useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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

const options = [
    {
        label:'The Color Red',
        value:'red'
    },{
        label:'The Color Green',
        value:'green'
    },{
        label:'A Shade Of Blue',
        value:'blue'
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown  
                          label="Select A Color." 
                          options={options} 
                          selected={selected} 
                          onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
}

export default App;