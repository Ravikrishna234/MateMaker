import React, { useState } from 'react';

function SearchBar(){
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredRoomPerson, setEnteredRoomPerson] = useState(1);
    const dropdownRoomMateHandler = (event)=>{
        setEnteredRoomPerson(event.target.value);
    }
    return <></>
}

export default SearchBar;