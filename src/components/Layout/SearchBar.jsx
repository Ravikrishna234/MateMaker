import React, { useState } from 'react';
import classes from './SearchBar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SearchBar(){
    const [enteredName, setEnteredName] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredRoomPerson, setEnteredRoomPerson] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const dateChangeHandler = (event) => {}
    const dropdownRoomMateHandler = (event)=>{
        setEnteredRoomPerson(event.target.value);
    }
    console.log(isDropdownOpen);
    const roomMateOptions = [
        {value: '', label: 'Preferred Roommate'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '4+', label: '4+'}
    ]
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
    <React.Fragment>
        <form onSubmit={submitHandler}>
            <div className={classes.searchContainer}>
                <input 
                    type="text"
                    placeholder="Enter University Name"
                    // value={enteredCity}
                    value={enteredName}
                    onChange={nameChangeHandler} required/>
                <input 
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler} />

                {/* Implementation 1 */}
                {/* <label htmlFor="selectOption" className={classes.selectDropdownLabel}> */}
                    {/* Preferred Roommates */}
                {/* </label> */}
                <select
                    id="selectOption"
                    value={enteredRoomPerson}
                    onChange={dropdownRoomMateHandler}
                    className={classes.searchDropdown}>
                        <option value='' >Preferred Roommate</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='>4'>4+</option>

                </select>
                <button type="submit" className={classes.searchButton}>
                    <FontAwesomeIcon className={classes.searchGlass} icon={faMagnifyingGlass}></FontAwesomeIcon>    
                </button>
                {/* Implementation 2 */}
                {/* <div className={classes.dropDownContainer}>
                    <div 
                        className={classes.dropDownHeader}
                        onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                        {enteredRoomPerson && roomMateOptions.find(opt => opt.value == enteredRoomPerson).label}
                    </div>
                    {isDropdownOpen && (
                        <ul className={classes.searchDropdown}>
                            {roomMateOptions.map((option)=> {
                                <li
                                    key={option.value}
                                    onClick={()=> dropdownRoomMateHandler(option.value)}
                                    className={`classes.dropDownOptions ${enteredRoomPerson === option.value }`}>
                                    {option.label}
                                </li>
                            })}
                        </ul>
                    )}
                </div> */}
            </div>
        </form>
    </React.Fragment>)
}

export default SearchBar;