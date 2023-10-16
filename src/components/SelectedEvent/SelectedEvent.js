import { useState } from "react";
import "./SelectedEvent.css"

export default function SelectedEvent({ result, id, selectOne, setShowList }) {

    const [showDropdown, setShowDropdown] = useState(false)

    const selectThis = () => {
        selectOne(id)
        setShowList(false)
    }
   
    // const selectEvent = () => {setShowDropdown(!showDropdown)}

    return (
        <div className="selected-Event" onClick={selectThis}>
            {result.name}
        </div>
    );
};