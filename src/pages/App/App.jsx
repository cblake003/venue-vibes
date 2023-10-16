import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import EventSearchPage from "../EventSearchPage/EventSearchPage";
import HomePage from "../../pages/HomePage/HomePage"
import FavoriteEventsPage from "../FavoriteEventsPage/FavoriteEventsPage"

export default function App() {
  const [user, setUser] = useState(getUser());
  

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/events" element={ <EventSearchPage />} />
            <Route path="/favorites" element={<FavoriteEventsPage />} />
          </Routes>  
        </>
        :
        <AuthPage setUser={ setUser } />
      }
    </main>
  );
}