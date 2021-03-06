import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const SearchBar = ({onFormSubmit}) =>{
    const [term, setTerm] = useState('');


   const onSubmit = (event)=>{
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                           value={term}
                           onChange={(e)=>{setTerm(e.target.value)}}
                    ></input>
                </div>

            </form>

        </div>
    );
}


export default SearchBar;