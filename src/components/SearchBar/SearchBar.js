import {useState} from "react";
import './SearchBar.css';
import axios from "axios"
import SearchResultsList from "../SearchResultsList/SearchResultsList";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const apiKey = process.env.REACT_APP_CONSUMER_KEY;

    const fetchData = async (value) => {
        const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${value}&apikey=${apiKey}`)
        setResults(response.data._embedded.events);
    };
    
    const handleChange = (value) => {
        console.log("value",value)
        setInput(value)
        fetchData(value)
    }


    return (
        <div className="input-wrapper">
            <input
                placeholder="Search for Artists, Venues, or Dates"
                value={input}
                onChange={(evt) => handleChange(evt.target.value)}
                />
        </div>
    );
};
