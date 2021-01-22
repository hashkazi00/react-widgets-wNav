//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [{
    label:'Afrikaans',
    value:'af'
},{
    label:'Arabic',
    value:'ar'
},{
    label:'Hindi',
    value:'hi'
}]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('Hello');

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="ui field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown 
            options={options} 
            selected={language} 
            onSelectedChange={setLanguage} 
            label='Select language...'
            />
            <hr/>
            <Convert language={language} text={text}/>
        </div>
        
    );
    
};

export default Translate;