import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Search = () =>{

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect(()=> {
        const timerId = setTimeout(()=>{
            
            setDebouncedTerm(term)
        }, 500);

        

        return () => {
            clearTimeout(timerId)
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:debouncedTerm
                }
            })
            setResults(data.query.search);

        } 

        search();

        
    },[debouncedTerm]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="blank">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        );
    })


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;