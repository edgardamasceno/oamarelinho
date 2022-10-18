import { useState } from "react";
import { SearchSVG } from "../SearchSVG";

import './styles.scss';

interface Props {
    placeholder: string,
    searchHandler: (search: string) => void;
}

export const Search = (props: Props) => {
    const { placeholder, searchHandler } = props;
    const [term, setTerm] = useState('');

    const handleChange = (event: { target: { value: any; }; }) => {
        setTerm(event.target.value);
    };

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        searchHandler(term);
    };

    const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchHandler(term);
        }
    }

    return (
        <div className='Search'>
            <input onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} />
            <button onClick={handleClick}><SearchSVG /></button>
        </div>
    )
}