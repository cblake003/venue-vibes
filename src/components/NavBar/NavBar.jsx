import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }
    return (
        <nav>
            <Link to="/"><img className="logo" src={"img/Venue-Vibes-logo-and-wordmark.png"} /></Link>
            &nbsp; &nbsp;
            <Link to="/events" className="events">Event Search</Link>
            &nbsp; | &nbsp;
            <Link to="/favorites" className="favorites">Favorite Events</Link>
            &nbsp; | &nbsp;
            <span> Let's vibe, { user.name } </span>
            &nbsp;&nbsp;<Link to="" onClick={ handleLogOut } className="logout">Log Out</Link>
        </nav>
    );
}