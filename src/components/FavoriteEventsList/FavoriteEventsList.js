import { useState } from "react";
import "./FavoriteEventsList.css";

export default function FavoriteEventsList({name, date, venue, price}) {
    return(
        <div className="favList">
        <h1>Artist: {name}</h1>
        <h2>Date: {new Date(date).toLocaleDateString()}</h2>
        <h2>Venue: {venue}</h2>
        <h2>Price Range: ${price}</h2>
        </div>
    )
}