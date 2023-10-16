import { set } from "mongoose";
import { useState } from "react"
import SelectedEvent from "../SelectedEvent/SelectedEvent"
import "./SearchResultsList.css"
import * as eventsAPI from "../../utilities/favorites-api"

export default function SearchResultsList({ results }) {

        const [showList, setShowList] = useState(true)
        const [currentResult, setCurrentResult] = useState(null)
        console.log(currentResult)

        const selectOne = (id) => {
           const newResult = results.filter((result) => result.id === id)
           console.log(newResult)
           setCurrentResult(newResult[0])
        }

        const showListAgain = () => {
            setShowList(true)
        }

        async function handleFavorite(result) {
            await eventsAPI.addFavorite(result)
        }

    return(
        <div className="results-list">
            {!showList && currentResult ? (
            <div onClick={showListAgain}>
                <button onClick={() => handleFavorite(currentResult)}>Add to Favorites</button>
                <h2>Event: {currentResult.name}</h2>
                <h3>Date: {currentResult.dates.start.localDate}</h3>
                <h3>Venue: {currentResult._embedded ? currentResult._embedded.venues[0].name : null}</h3>
                {currentResult?.priceRanges && (
                    <p>Price Range: ${currentResult.priceRanges[0].min} - ${currentResult.priceRanges[0].max}</p>
                )}
                <img src={currentResult.images[0].url} alt={currentResult.name} />
            </div>
    ) : (results.map((result, id) => (
                <div key={id}>
                        <SelectedEvent result={result} id={result.id} selectOne={selectOne} setShowList={setShowList} />
                </div>
            )))}
        </div>
    );
}