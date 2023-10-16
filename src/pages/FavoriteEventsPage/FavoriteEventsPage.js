import "./FavoriteEventsPage.css"
import { useState, useEffect } from "react";
import FavoriteEventsList from "../../components/FavoriteEventsList/FavoriteEventsList";
import * as favoritesAPI from "../../utilities/favorites-api"


export default function FavoriteEventsPage() {
    const [favorites, setFavorites] = useState([])
    useEffect(function () {
        async function getFavorites() {
            const allFavorites = await favoritesAPI.getAll()
            console.log(allFavorites)
            setFavorites(allFavorites)
        }
        getFavorites()
    }, [])

    const favoritesList = favorites.map((f, idx) => 
    <FavoriteEventsList name={ f.name } date={f.date} venue={f.venue} price={f.priceRange} key={idx} />)
    return(
        <>
        { favoritesList }
        </>
    )
}