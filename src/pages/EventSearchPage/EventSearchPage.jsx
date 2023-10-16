import { useState } from "react"
import { SearchBar } from "../../components/SearchBar/SearchBar";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import "./EventSearchPage.css"

export default function EventSearchPage() {


    const [results, setResults] = useState([])

        return(
            <main>
                <div className="transparent-box">
                    <h1>Bringing Live to Life</h1>
                    <h3>Explore countless live events and uncover unforgettable concerts, sporting events, theater shows, and more.</h3>
                </div>
                    <SearchBar results={results} setResults={setResults} />
                    <SearchResultsList results={results} />
            </main>
        );
    }